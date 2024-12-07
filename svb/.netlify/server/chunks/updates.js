import { d as db } from "./store.svelte.js";
import { doc, setDoc } from "firebase/firestore";
async function addActivity(userId, eventType, timestamp, roles) {
  const activitiesRef = doc(db, "activities", userId);
  try {
    const activityData = {
      userId,
      timestamp: typeof timestamp === "number" ? new Date(timestamp).toISOString() : timestamp.toISOString(),
      eventType,
      roles: Array.isArray(roles) ? roles : [],
      details: {
        [eventType]: true
      },
      lastActivityDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    const docRef = await setDoc(activitiesRef, activityData);
    console.log("Activity added with ID:", docRef?.id);
    return docRef?.id;
  } catch (error) {
    console.error("Error adding activity:", error);
    throw error;
  }
}
export {
  addActivity as a
};
