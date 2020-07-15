export interface Credential {
    email: string;
    username: string;
    password: string;
}

export class Credential implements Credential {
    email: string;
    username: string;
    password: string;
}