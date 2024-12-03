// src/routes/api/partners/projects/+server.ts
import { json } from '@sveltejs/kit';
import { createProject, getProjectsController } from './projectController';
import { validateProjectForm } from './utils/validator';
import { getAllProjects } from './projectService';

export const POST = async ({ request }) => {
    try {
        const projectData = await request.json();

        // Validate project data using Zod schema
        const validationResult = validateProjectForm(projectData);
        if (!validationResult.isValid) {
            return json({ error: validationResult.errors }, { status: 400 });
        }

        // Call the controller to handle project creation
        const createdProject = await createProject(projectData);

        return json({ message: 'Project successfully created!', project: createdProject });
    } catch (error) {
        console.error('Error creating project:', error);
        return json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
};



// Define the GET handler for the API route
export const GET = async () => {
    try {
        // Fetch the projects from Firestore
        const projects = await getAllProjects();
        
        // Return the projects as a valid Response object
        return json(projects); // The json() function returns a Response object
    } catch (error) {
        console.error('Error fetching projects from Firestore:', error);
        
        // Return an error response with a 500 status code
        return json({ error: 'Unable to fetch projects' }, { status: 500 });
    }
};



