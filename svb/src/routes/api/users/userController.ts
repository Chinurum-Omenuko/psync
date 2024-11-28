// src/api/users/userController.ts
import { json } from '@sveltejs/kit';
import { RegisterSchema, LoginSchema } from './utils/validators';
import { createUser, loginUser } from './userService';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '$lib/firebase';
import { goto } from '$app/navigation';
import { authStore } from '../../../store/store.svelte';

// Register user
export async function registerUser(data: unknown) {
    try {
        // Validate incoming data
        const validData = RegisterSchema.parse(data);
        console.log("done validating")

        // Call service to create user
        const user = await createUser(validData);
        return json({ message: 'User registered successfully', user });
    } catch (err) {
        console.error('Registration error:', err);

        // Handle validation or other errors
        if (err instanceof Error) {
            return json({ error: err.message }, { status: 400 });
        }

        return json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
}

// Login user

export async function loginUserController(data: { email: string, password: string }) {
    try {
        const { email, password } = data;

        // Sign in the user with Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'Users', user.uid));
        if (!userDoc.exists()) {
            throw new Error('User not found in Firestore');
        }

        const userDataFromFirestore = userDoc.data();
        const role = userDataFromFirestore?.role || 'user'; // Default to 'user' role if not set
        console.log(userDataFromFirestore)

        // Update the writable store with user and role
        authStore.set({
            user: user,
            role: role
        });


        console.log("My authstore role now is: ", role);
        console.log("My user is:", user);

        return json({
            message: 'Login successful',
            userData: {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role,
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        return json({ error: 'Invalid email or password' }, { status: 401 });
    }
}

