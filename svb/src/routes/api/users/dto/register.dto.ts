// src/api/users/dto/register.dto.ts
export interface RegisterDTO {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    program?: string | null;
    course?: string | null;
    organization?: string | null;
}
