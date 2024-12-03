// src/lib/validators/courseValidators.ts

import { z } from 'zod';

export const courseSchema = z.object({
    name: z.string().min(1, 'Course Name is required'),
    code: z.string().min(1, 'Course Code is required'),
    term: z.string().min(1, 'Term is required'),
    program: z.string().min(1, 'Program is required'),
    school: z.string().min(1, 'School is required'),
    skills: z.string().min(1, 'Skills are required'),
    description: z.string().min(1, 'Description is required'),
});

export const validateCourseForm = (data: unknown) => {
    try {
        // Parse and validate the data using Zod
        const parsedData = courseSchema.parse(data);
        return { isValid: true, data: parsedData };
    } catch (e) {
        if (e instanceof z.ZodError) {
            const errors = e.errors.map(err => err.message);
            return { isValid: false, errors };
        }
        throw e; // Unexpected error
    }
};
