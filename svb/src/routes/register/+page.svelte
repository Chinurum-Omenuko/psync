<script lang="ts">
    import { goto } from '$app/navigation';

    // Initialize form variables
    let email: string = '';
    let firstname: string = '';
    let lastname: string = '';
    let password: string = '';
    let program: string | null = null;
    let course: string | null = null;
    let organization: string | null = null;

    // Function to determine the role based on program, course, and organization
    const determineRole = (): string => {
        if (course && program && !organization) {
            return 'faculty'; // Role is 'faculty' if both course and program are provided
        } else if (organization && !course && !program) {
            return 'partner'; // Role is 'external' if only organization is provided
        } else {
            return 'user'; // Default role is 'user' if no specific conditions match
        }
    };

    const submitForm = async (event: Event) => {
        event.preventDefault();

        // Ensure all required fields are filled
        if (!firstname || !lastname) {
            alert("First Name and Last Name are required.");
            return;
        }

        if (!program) program = null;
        if (!course) course = null;
        if (!organization) organization = null;

        console.log("first and last met")

        // Determine role based on the form inputs
        const role = determineRole();

        console.log("role determined")

        const userData = {
            email,
            password,
            firstname,
            lastname,
            program,
            course,
            organization,
            role, // Add role to the user data
            action: 'register',
        };

        console.log(JSON.stringify(userData))

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('User registered:', result);
                goto('/login');
            } else {
                console.error('Error registering user:', result.error);
                alert(result.error);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred.');
        }
    };
</script>

<form on:submit={submitForm}>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" bind:value={email} required><br>

    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname" bind:value={firstname} required><br>

    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname" bind:value={lastname} required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" bind:value={password} required><br>

    <label for="program">Program:</label>
    <input type="text" id="program" name="program" bind:value={program}><br>

    <label for="course">Course:</label>
    <input type="text" id="course" name="course" bind:value={course}><br>

    <label for="organization">Organization:</label>
    <input type="text" id="organization" name="organization" bind:value={organization}><br>

    <input type="submit" value="Register">
</form>
