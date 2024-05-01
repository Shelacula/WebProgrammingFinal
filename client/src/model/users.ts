import { api } from "../viewModel/userSession";

export interface User {
    firstName: string
    lastName: string
    username: string
    id: number;
    isAdmin: boolean
    emails: string[]
    avatar: string
  }
  
  export interface Workout {
    pid: number;
    uid: number;
    title: string
    date: string
    duration: string
    distance: string
    location: string
    picture: string
    type: string
  }

  export async function getUsers() {
    const data = await api<User[]>("api/v1/users");
    return data ? data.data : [];
  }

  export async function getAllWorkouts() {
    const data = await api<Workout[]>("api/v1/workouts");
    return data ? data.data : [];
  }