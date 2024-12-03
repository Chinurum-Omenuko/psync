import { writable } from 'svelte/store';
import { db } from "$lib/firebase"
import { doc, getDoc, setDoc, addDoc } from "firebase/firestore";
export const newUpdates = writable({});


export async function addActivity(userId: any, eventType: string, timestamp: Date | number, roles?: string[]): Promise<string> {
    const activitiesRef = doc(db, "activities", userId);

    try {
        // Document data
        const activityData = {
            userId,
            timestamp: typeof timestamp === 'number' ? new Date(timestamp).toISOString() : timestamp.toISOString(),
            eventType,
            roles: Array.isArray(roles) ? roles : [],
            details: {
                [eventType]: true
            },
            lastActivityDate: new Date().toISOString()
        };

        // Add a new document to the collection
        const docRef = await setDoc(activitiesRef, activityData);

        console.log("Activity added with ID:", docRef?.id);
        return docRef?.id;
    } catch (error) {
        console.error("Error adding activity:", error);
        throw error; // Or handle the error appropriately
    }
}