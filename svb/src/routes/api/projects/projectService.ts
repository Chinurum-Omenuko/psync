// src/lib/services/projectService.ts
import { db } from '$lib/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { addActivity } from "../../../store/updates";
import { authStore } from '../../../store/store.svelte';
import { getContext } from 'svelte';
import type { User } from 'firebase/auth';

// const authContext = getContext<{ user: User | null; role: string | null }>('auth');
// const { user, role } = authContext


export const createProjectInFirestore = async (projectData) => {
    try {
        // Reference to the Firestore 'projects' collection
        const projectRef = collection(db, 'projects');
        
        // Create a new document in the 'projects' collection with the project data
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
            createdAt: new Date(),
            userID: projectData.userID,
        });

        await addActivity(projectData.userID, 'projectCreationRequest', new Date());

        // Return the created project with its Firestore ID
        return { id: docRef.id, ...projectData };
    } catch (error) {
        console.error('Error saving project in Firestore:', error);
        throw new Error('Error saving project in Firestore');
    }
};



export const getAllProjects = async () => {
    try {
        // Reference to the projects collection in Firestore
        const projectsRef = collection(db, "projects");
        const snapshot = await getDocs(projectsRef);

        // If no documents are found
        if (snapshot.empty) {
            console.log('No projects found');
            return [];
        }

        const projects = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return projects;
    } catch (error) {
        console.error("Error fetching projects: ", error);
        throw new Error(`Unable to fetch projects: ${error}`);
    }
};
