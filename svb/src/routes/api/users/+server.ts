// src/api/users/+server.ts
import { json } from '@sveltejs/kit';
import { registerUser, loginUserController } from './userController';

export async function POST({ request }) {
    try {
        const { action, ...data } = await request.json();

        switch (action) {
            case 'register':
                return await registerUser(data);

            case 'login':
                return await loginUserController(data);

            default:
                return json({ error: 'Invalid action' }, { status: 400 });
        }
    } catch (err) {
        console.error('Error handling request:', err);
        return json({ error: err || 'Server error' }, { status: 500 });
    }
}
