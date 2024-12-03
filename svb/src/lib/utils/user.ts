import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { authStore } from '../../store/store.svelte';
import { db } from '$lib/firebase';
let auth = authStore;

async function fetchByFirstname(collectionName: string, firstname: string) {
    try {
        // Reference the collection
        const colRef = collection(db, collectionName);

        // Create a query to filter documents by `firstname`
        const q = query(colRef, where("firstname", "==", firstname));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Check if any documents match the query
        if (!querySnapshot.empty) {
            const results: any[] = [];
            querySnapshot.forEach((doc) => {
                // Push each document's data and ID
                results.push({ id: doc.id, ...doc.data() });
            });
            console.log("Query Results:", results);
            return results;
        } else {
            console.log("No matching documents found.");
            return [];
        }
    } catch (error) {
        console.error("Error querying documents:", error);
    }
}

  