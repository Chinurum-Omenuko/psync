import "./client.js";
import { p as public_env } from "./equality.js";
import { getApps, initializeApp, deleteApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: public_env.PUBLIC_API_KEY,
  authDomain: public_env.PUBLIC_AUTH_DOMAIN,
  projectId: public_env.PUBLIC_PROJECT_ID,
  storageBucket: public_env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: public_env.PUBLIC_MESSAGING_SENDER_ID,
  appId: public_env.PUBLIC_APP_ID
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
new GoogleAuthProvider();
const initialAuthState = { user: null, role: null, additionalInfo: null };
const authStore = writable(initialAuthState);
let isInitializing = true;
onAuthStateChanged(auth, async (user) => {
  if (isInitializing) {
    isInitializing = false;
    return;
  }
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const role = userDoc.exists() ? userDoc.data()?.role : null;
    const additionalInfo = userDoc.data()?.additionalInfo || null;
    if (role) {
      authStore.set({ user, role, additionalInfo });
    } else {
      console.log("User role not found, prompting for role selection.");
    }
  } else {
    authStore.set({ user: null, role: null, additionalInfo: null });
  }
});
export {
  authStore as a,
  auth as b,
  db as d
};
