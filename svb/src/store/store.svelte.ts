import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { auth, db, googleProvider } from "$lib/firebase";
import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut, type User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { writable } from "svelte/store";

// Define the store type
export type AuthState = {
    user: User | null;
    role: string | null;
    additionalInfo: any; // Holds either organization or program/course info
};

// Ensure state is initialized from localStorage if available
const initialAuthState: AuthState = browser
    ? JSON.parse(localStorage.getItem("auth") || '{"user":null,"role":null,"additionalInfo":null}')
    : { user: null, role: null, additionalInfo: null };

// Create a writable store to hold the auth state
export const authStore = writable<AuthState>(initialAuthState);

// Synchronize the store with localStorage whenever the store updates
if (browser) {
    authStore.subscribe((state) => {
        // Don't update localStorage if state hasn't changed
        localStorage.setItem("auth", JSON.stringify(state));
    });
}

let isInitializing = true;  // Flag to track if the app is initializing (to prevent unnecessary updates)

// Ensure persistence for authentication
if (browser) {
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            console.log("Persistence set to localStorage");
        })
        .catch((error) => {
            console.error("Error setting persistence:", error);
        });
}

onAuthStateChanged(auth, async (user) => {
    if (isInitializing) {
        // Skip the first change to avoid a loop
        isInitializing = false;
        return;
    }

    if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        // If no role is found, do not set a default role
        const role = userDoc.exists() ? userDoc.data()?.role : null;
        const additionalInfo = userDoc.data()?.additionalInfo || null;

        if (role) {
            // Update the store with the user, role, and additionalInfo
            authStore.set({ user, role, additionalInfo });
        } else {
            // Handle case where role is not assigned in Firestore
            console.log("User role not found, prompting for role selection.");
            // Redirect or show UI for selecting a role if necessary
        }
    } else {
        // Reset the store when logged out
        authStore.set({ user: null, role: null, additionalInfo: null });
    }
});

export const authHandlers = {
    register: async (email: string, password: string, role: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update store with new user and selected role
            authStore.set({ user, role, additionalInfo: null });

            await setDoc(doc(db, "users", user.uid), { role });

            console.log('User registered with role:', role);
            goto("/main");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
            // Reset store when user logs out
            authStore.set({ user: null, role: null, additionalInfo: null });
            goto("/");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    },

    loginWithGoogle: async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Google login successful:", user);

            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                // Create a new user document in Firestore if not existing
                const userData = {
                    email: user.email,
                    firstname: user.displayName?.split(" ")[0] || "No Firstname",
                    lastname: user.displayName?.split(" ")[1] || "No Lastname",
                    createdAt: new Date().toISOString(),
                    additionalInfo: null, // Initial empty value
                    role: null, // No role set at first
                };

                await setDoc(userDocRef, userData);
                console.log("New user created in Firestore:", userData);
            } else {
                // If user exists, fetch role and additional info
                const role = userDoc.data()?.role;
                const additionalInfo = userDoc.data()?.additionalInfo || null;

                if (role) {
                    authStore.set({ user, role, additionalInfo });
                } else {
                    // Handle case where no role is found
                    console.log("User has no role assigned.");
                    // You could prompt the user to select a role if needed
                }
            }

            // Update localStorage after setting the role
            authStore.update((state) => {
                localStorage.setItem("auth", JSON.stringify({
                    user: state.user,
                    role: state.role,
                    additionalInfo: state.additionalInfo
                }));
                return state;
            });

            goto("/dashboard/home");

        } catch (error) {
            console.error("Error during Google login:", error);
        }
    },

    loginWithEmail: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();

            const role = userData?.role || null; // Do not default to "user" anymore

            if (role) {
                // Update store with user and role after login
                authStore.set({ user, role, additionalInfo: userData?.additionalInfo });
            } else {
                // Handle case where no role is found
                console.log("User has no role assigned.");
            }

            // Update localStorage after login
            authStore.update((state) => {
                localStorage.setItem("auth", JSON.stringify({
                    user: state.user,
                    role: state.role,
                    additionalInfo: state.additionalInfo
                }));
                return state;
            });
        } catch (error) {
            console.error('Error logging in:', error);
        }
    },
};
