import { j as json } from "../../../../../chunks/index.js";
import { d as db } from "../../../../../chunks/store.svelte.js";
import { collection, addDoc } from "firebase/firestore";
import { a as addActivity } from "../../../../../chunks/updates.js";
async function POST({ request }) {
  const { projectId, projectName, organizationName, projectIdea, field, organizationInfo, skillsNeeded, startTerm, createdAt, uid } = await request.json();
  try {
    const projectRef = collection(db, "requested_projects");
    const docRef = await addDoc(projectRef, {
      projectId,
      projectName,
      organizationName,
      projectIdea,
      field,
      organizationInfo,
      skillsNeeded,
      startTerm,
      createdAt,
      status: "expressed"
    });
    await addActivity(uid, "projectInterestRequest", /* @__PURE__ */ new Date());
    return json({ success: true, id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Error expressing interest:", error);
    return json({ success: false, error: "An unexpected error occurred." }, { status: 500 });
  }
}
export {
  POST
};
