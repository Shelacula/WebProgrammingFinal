import users from '@/data/users.json';

export interface User{
    firstName: string;
    lastName: string;
    username: string;
    isAdmin: boolean;
    emails: String[];
    avatar: string;
}

export function getUsers(): User[]{
    return users.users;
}