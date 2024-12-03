import { createCourseInFirestore, getAllCourses } from './coursesService';

export const createCourse = async (projectData) => {
    try {
        // Call service to create project in Firestore
        const createdCourse = await createCourseInFirestore(projectData);
        return createdCourse;
    } catch (error) {
        console.error('Error in projectController:', error);
        throw new Error('Error creating project');
    }
};


export const getProjectsController = async () => {
    try {
        const projects = await getAllCourses();
        return { status: 200, body: { projects } };
    } catch (error) {
        return { status: 500, body: { message: "Failed to fetch projects" } };
    }
};

