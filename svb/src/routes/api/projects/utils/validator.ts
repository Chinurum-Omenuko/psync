// src/lib/validators/validators.ts
import { z } from 'zod';

// Define the Zod schema for ProjectDTO
export const projectSchema = z.object({
    organizationName: z.string().min(1, 'Organization Name is required'),
    field: z.string().min(1, 'Organization Field is required'),
    startTerm: z.string().min(1, 'Estimated Start Term is required'),
    projectName: z.string().min(1, 'Project Name is required'),
    skillsNeeded: z.string().min(1, 'Skills Needed are required'),
    projectIdea: z.string().min(1, 'Project Idea is required'),
    organizationInfo: z.string().min(1, 'About the Organization is required'),
    acknowledge: z.boolean().refine(val => val === true, {
        message: 'You must acknowledge the public display of your project',
    }),
});

// Helper function to validate the project data
export const validateProjectForm = (data: unknown) => {
    try {
        // Parse and validate the data using Zod
        const parsedData = projectSchema.parse(data);
        return { isValid: true, data: parsedData };
    } catch (e) {
        if (e instanceof z.ZodError) {
            const errors = e.errors.map(err => err.message);
            return { isValid: false, errors };
        }
        throw e; // Unexpected error
    }
};
