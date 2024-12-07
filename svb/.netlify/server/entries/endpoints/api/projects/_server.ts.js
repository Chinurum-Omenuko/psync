import { j as json } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/store.svelte.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { a as addActivity } from "../../../../chunks/updates.js";
import { z } from "zod";
const createProjectInFirestore = async (projectData) => {
  try {
    const projectRef = collection(db, "projects");
    const docRef = await addDoc(projectRef, {
      organizationName: projectData.organizationName,
      field: projectData.field,
      startTerm: projectData.startTerm,
      projectName: projectData.projectName,
      skillsNeeded: projectData.skillsNeeded,
      projectIdea: projectData.projectIdea,
      organizationInfo: projectData.organizationInfo,
      acknowledge: projectData.acknowledge,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date(),
      userID: projectData.userID
    });
    await addActivity(projectData.userID, "projectCreationRequest", /* @__PURE__ */ new Date());
    return { id: docRef.id, ...projectData };
  } catch (error) {
    console.error("Error saving project in Firestore:", error);
    throw new Error("Error saving project in Firestore");
  }
};
const getAllProjects = async () => {
  try {
    const projectsRef = collection(db, "projects");
    const snapshot = await getDocs(projectsRef);
    if (snapshot.empty) {
      console.log("No projects found");
      return [];
    }
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return projects;
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw new Error(`Unable to fetch projects: ${error}`);
  }
};
const createProject = async (projectData) => {
  try {
    const createdProject = await createProjectInFirestore(projectData);
    return createdProject;
  } catch (error) {
    console.error("Error in projectController:", error);
    throw new Error("Error creating project");
  }
};
const projectSchema = z.object({
  organizationName: z.string().min(1, "Organization Name is required"),
  field: z.string().min(1, "Organization Field is required"),
  startTerm: z.string().min(1, "Estimated Start Term is required"),
  projectName: z.string().min(1, "Project Name is required"),
  skillsNeeded: z.string().min(1, "Skills Needed are required"),
  projectIdea: z.string().min(1, "Project Idea is required"),
  organizationInfo: z.string().min(1, "About the Organization is required"),
  acknowledge: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the public display of your project"
  })
});
const validateProjectForm = (data) => {
  try {
    const parsedData = projectSchema.parse(data);
    return { isValid: true, data: parsedData };
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errors = e.errors.map((err) => err.message);
      return { isValid: false, errors };
    }
    throw e;
  }
};
const POST = async ({ request }) => {
  try {
    const projectData = await request.json();
    const validationResult = validateProjectForm(projectData);
    if (!validationResult.isValid) {
      return json({ error: validationResult.errors }, { status: 400 });
    }
    const createdProject = await createProject(projectData);
    return json({ message: "Project successfully created!", project: createdProject });
  } catch (error) {
    console.error("Error creating project:", error);
    return json({ error: "An unexpected error occurred." }, { status: 500 });
  }
};
const GET = async () => {
  try {
    const projects = await getAllProjects();
    return json(projects);
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    return json({ error: "Unable to fetch projects" }, { status: 500 });
  }
};
export {
  GET,
  POST
};
