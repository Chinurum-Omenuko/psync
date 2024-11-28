// src/api/users/userService.ts
import { auth, db } from '$lib/firebase'; // Firebase setup
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import type { RegisterDTO } from './dto/register.dto';
import { type LoginDTO } from './dto/login.dto';

import { determineRole } from './helpers/determineRole';

// Create a new user
export async function createUser(userData: RegisterDTO) {
    try {
        const { email, password, firstname, lastname, program, course, organization } = userData;
        console.log("done extracting")

        const role = determineRole(program, course, organization);
        console.log("done determining role")

        // Create the user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("done creating credentials")
        const user = userCredential.user;
        console.log("done grabbing user cred")

        // Save additional user data in Firestore
        const userFirestoreData = {
            email,
            firstname,
            lastname,
            program: program || null,
            course: course || null,
            organization: organization || null,
            role,
            createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, 'Users', user.uid), userFirestoreData);

        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role
        };
    } catch (err) {
        console.error('Error creating user:', err);
        throw new Error('Failed to create user');
    }
}

// Login user
export async function loginUser(userData: LoginDTO) {
    try {
        const { email, password } = userData;

        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'Users', user.uid));
        if (!userDoc.exists()) {
            throw new Error('User not found in Firestore');
        }

        const userDataFromFirestore = userDoc.data();
        const role = userDataFromFirestore?.role || 'user'; // Default to 'user' role

        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role,
        };
    } catch (err) {
        console.error('Login error:', err);
        throw new Error('Failed to log in');
    }
}
