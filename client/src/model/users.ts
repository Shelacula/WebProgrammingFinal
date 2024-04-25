import { api } from "../viewModel/userSession";

export interface User {
    firstName: string
    lastName: string
    username: string
    id: number;
    isAdmin: boolean
    emails: string[]
    avatar: string
    workouts: Workout[]
  }
  
  export interface Workout {
    title: string
    date: string
    duration: string
    distance: string
    location: string
    picture: string
    type: string
  }

  export async function getUsers() {
    const data = await api<User[]>("users");
    return data.data;
  }

export function getWorkouts(user: User) : Workout[]{
    return user.workouts;
}

export async function getAllWorkouts(): Promise<Workout[]>{
  const allWorkouts: Workout[] = [];
  const data = api<User[]>("users");
    (await data).data.forEach(function(user){
    allWorkouts.push(...user.workouts)
  })
  return allWorkouts;
}