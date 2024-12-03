import { json } from "@sveltejs/kit";
import { authStore } from "../../../../store/store.svelte.js";
import { getUserFullName } from "$lib/utils/user.js";
import { addDoc, collection } from "firebase/firestore";
import { db } from "$lib/firebase.js";

export async function POST({ request }) {
    const { projectId, projectName, organizationName, projectIdea, field, organizationInfo, skillsNeeded, startTerm, createdAt, uid } = await request.json();

    try {
        // Extract relevant data
        
        // Create a new document in Firestore
        const projectRef = collection(db, 'requested_projects');
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
            status: 'expressed'
        });

        return json({ success: true, id: docRef.id }, { status: 201 });
    } catch (error) {
        console.error('Error expressing interest:', error);
        return json({ success: false, error: 'An unexpected error occurred.' }, { status: 500 });
    }
}
