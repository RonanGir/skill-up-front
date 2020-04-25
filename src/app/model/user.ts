import { Profile } from './profile';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    profile: Profile;
}