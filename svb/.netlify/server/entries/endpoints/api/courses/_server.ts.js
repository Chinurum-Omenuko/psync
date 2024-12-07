import { z } from "zod";
import { d as db } from "../../../../chunks/store.svelte.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { a as addActivity } from "../../../../chunks/updates.js";
import { j as json } from "../../../../chunks/index.js";
const courseSchema = z.object({
  name: z.string().min(1, "Course Name is required"),
  code: z.string().min(1, "Course Code is required"),
  term: z.string().min(1, "Term is required"),
  program: z.string().min(1, "Program is required"),
  school: z.string().min(1, "School is required"),
  skills: z.string().min(1, "Skills are required"),
  description: z.string().min(1, "Description is required")
});
const validateCourseForm = (data) => {
  try {
    const parsedData = courseSchema.parse(data);
    return { isValid: true, data: parsedData };
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errors = e.errors.map((err) => err.message);
      return { isValid: false, errors };
    }
    throw e;
  }
};
const createCourseInFirestore = async (courseData) => {
  try {
    const courseRef = collection(db, "courses");
    const docRef = await addDoc(courseRef, {
      name: courseData.name,
      code: courseData.code,
      term: courseData.term,
      program: courseData.program,
      school: courseData.school,
      skills: courseData.skills,
      description: courseData.description,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date(),
      userID: courseData.userID
    });
    await addActivity(courseData.userID, "courseRegistrationRequest", /* @__PURE__ */ new Date());
    return { id: docRef.id, ...courseData };
  } catch (error) {
    console.error("Error saving course in Firestore:", error);
    throw new Error("Error saving course in Firestore");
  }
};
const createCourse = async (projectData) => {
  try {
    const createdProject = await createCourseInFirestore(projectData);
    return createdProject;
  } catch (error) {
    console.error("Error in projectController:", error);
    throw new Error("Error creating project");
  }
};
const POST = async ({ request }) => {
  try {
    const courseData = await request.json();
    const validationResult = validateCourseForm(courseData);
    if (!validationResult.isValid) {
      return json({ error: validationResult.errors }, { status: 400 });
    }
    const createdCourse = await createCourse(courseData);
    return json({ message: "Course successfully registered!", course: createdCourse });
  } catch (error) {
    console.error("Error registering course:", error);
    return json({ error: "An unexpected error occurred." }, { status: 500 });
  }
};
async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    if (querySnapshot.empty) {
      console.log("No courses found");
      return json([], { status: 404 });
    }
    const courses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return json(courses, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}
export {
  GET,
  POST
};
