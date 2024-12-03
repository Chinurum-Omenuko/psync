import type { RequestHandler } from './$types';
import { validateCourseForm } from './utils/validator';
import { createCourse } from './coursesController';
import { json } from '@sveltejs/kit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const courseData = await request.json();

    // Validate course data using Zod schema
    const validationResult = validateCourseForm(courseData);
    if (!validationResult.isValid) {
      return json({ error: validationResult.errors }, { status: 400 });
    }

    // Call the controller to handle course creation
    const createdCourse = await createCourse(courseData);

    return json({ message: 'Course successfully registered!', course: createdCourse });
  } catch (error) {
    console.error('Error registering course:', error);
    return json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
};


export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));

    if (querySnapshot.empty) {
      console.log('No courses found');
      return json([], { status: 404 });
    }

    const courses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return json(courses, { status: 200 });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}
