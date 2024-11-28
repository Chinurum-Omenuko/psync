import { error } from '@sveltejs/kit';

// This handles the server-side data fetching
export const load = async () => {
    try {
        // Call your internal API to fetch projects
        const response = await fetch('http://localhost:5173/api/projects'); // Adjust the URL if necessary

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        const projects = await response.json();
        
        // Return the projects to be used in the component
        return { projects };
    } catch (err) {
        // Handle errors and return an error page if something goes wrong
        console.error(err);
        throw error(500, 'Unable to fetch projects');
    }
};
