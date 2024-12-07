import { j as json } from "../../../../chunks/index.js";
import { z } from "zod";
import { b as auth, d as db, a as authStore } from "../../../../chunks/store.svelte.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import "../../../../chunks/client.js";
const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  program: z.string().nullable().optional(),
  course: z.string().nullable().optional(),
  organization: z.string().nullable().optional()
});
z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long")
});
const determineRole = (program, course, organization) => {
  if (course && program && !organization) {
    return "faculty";
  } else if (organization && !course && !program) {
    return "external";
  } else {
    return "user";
  }
};
async function createUser(userData) {
  try {
    const { email, password, firstname, lastname, program, course, organization } = userData;
    console.log("done extracting");
    const role = determineRole(program, course, organization);
    console.log("done determining role");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("done creating credentials");
    const user = userCredential.user;
    console.log("done grabbing user cred");
    const userFirestoreData = {
      email,
      firstname,
      lastname,
      program: program || null,
      course: course || null,
      organization: organization || null,
      role,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await setDoc(doc(db, "Users", user.uid), userFirestoreData);
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role
    };
  } catch (err) {
    console.error("Error creating user:", err);
    throw new Error("Failed to create user");
  }
}
async function registerUser(data) {
  try {
    const validData = RegisterSchema.parse(data);
    console.log("done validating");
    const user = await createUser(validData);
    return json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Registration error:", err);
    if (err instanceof Error) {
      return json({ error: err.message }, { status: 400 });
    }
    return json({ error: "Unexpected error occurred" }, { status: 500 });
  }
}
async function loginUserController(data) {
  try {
    const { email, password } = data;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDoc = await getDoc(doc(db, "Users", user.uid));
    if (!userDoc.exists()) {
      throw new Error("User not found in Firestore");
    }
    const userDataFromFirestore = userDoc.data();
    const role = userDataFromFirestore?.role || "user";
    console.log(userDataFromFirestore);
    authStore.set({
      user,
      role
    });
    console.log("My authstore role now is: ", role);
    console.log("My user is:", user);
    return json({
      message: "Login successful",
      userData: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    return json({ error: "Invalid email or password" }, { status: 401 });
  }
}
async function POST({ request }) {
  try {
    const { action, ...data } = await request.json();
    switch (action) {
      case "register":
        return await registerUser(data);
      case "login":
        return await loginUserController(data);
      default:
        return json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (err) {
    console.error("Error handling request:", err);
    return json({ error: err || "Server error" }, { status: 500 });
  }
}
export {
  POST
};
