// src/api/users/utils/validators.ts
import { z } from 'zod';

// Registration validation schema
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    firstname: z.string().min(1, 'First name is required'),
    lastname: z.string().min(1, 'Last name is required'),
    program: z.string().nullable().optional(),
    course: z.string().nullable().optional(),
    organization: z.string().nullable().optional(),
});


// Login validation schema
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});
