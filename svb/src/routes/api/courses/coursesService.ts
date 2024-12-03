// src/lib/services/courseService.ts
import { db } from '$lib/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { addActivity } from "../../../store/updates";
import { authStore } from '../../../store/store.svelte';
import { getContext } from 'svelte';
import type { User } from 'firebase/auth';

// const authContext = getContext<{ user: User | null; role: string | null }>('auth');
// const { user, role } = authContext

export const createCourseInFirestore = async (courseData) => {
  try {
    // Reference to the Firestore 'courses' collection
    const courseRef = collection(db, 'courses');
    
    // Create a new document in the 'courses' collection with the course data
    const docRef = await addDoc(courseRef, {
      name: courseData.name,
      code: courseData.code,
      term: courseData.term,
      program: courseData.program,
      school: courseData.school,
      skills: courseData.skills,
      description: courseData.description,
      status: "pending",
      createdAt: new Date(),
      userID: courseData.userID,
    });

    await addActivity(courseData.userID, 'courseRegistrationRequest', new Date());

    // Return the created course with its Firestore ID
    return { id: docRef.id, ...courseData };
  } catch (error) {
    console.error('Error saving course in Firestore:', error);
    throw new Error('Error saving course in Firestore');
  }
};

export const getAllCourses = async () => {
  try {
    // Reference to the courses collection in Firestore
    const coursesRef = collection(db, "courses");
    const snapshot = await getDocs(coursesRef);

    // If no documents are found
    if (snapshot.empty) {
      console.log('No courses found');
      return [];
    }

    const courses = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return courses;
  } catch (error) {
    console.error("Error fetching courses: ", error);
    throw new Error(`Unable to fetch courses: ${error}`);
  }
};
