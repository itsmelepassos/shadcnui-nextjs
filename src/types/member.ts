import { Role } from "./role";

export type Member = {
    id: number;
    name: string;
    avatar: string;
    email: string;
    role: Role;
}