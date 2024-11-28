// src/lib/controllers/projectController.ts
import { createProjectInFirestore, getAllProjects } from './projectService';

export const createProject = async (projectData) => {
    try {
        // Call service to create project in Firestore
        const createdProject = await createProjectInFirestore(projectData);
        return createdProject;
    } catch (error) {
        console.error('Error in projectController:', error);
        throw new Error('Error creating project');
    }
};


export const getProjectsController = async () => {
    try {
        const projects = await getAllProjects();
        return { status: 200, body: { projects } };
    } catch (error) {
        return { status: 500, body: { message: "Failed to fetch projects" } };
    }
};

