export const determineRole = (program: string | null | undefined, course: string | null | undefined, organization: string | null | undefined): string => {
    if (course && program && !organization) {
        return 'faculty'; // Role is 'faculty' if both course and program are provided
    } else if (organization && !course && !program) {
        return 'external'; // Role is 'external' if only organization is provided
    } else {
        return 'user'; // Default role is 'user' if no specific conditions match
    }
};