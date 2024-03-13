import users from '@/data/users.json';

export interface User {
    firstName: string
    lastName: string
    username: string
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

export function getUsers(): User[]{
    return users.users;
}

export function getWorkouts(user: User) : Workout[]{
    return user.workouts;
}

export function getAllWorkouts(): Workout[]{
  const allWorkouts: Workout[] = [];
  users.users.forEach(function(user){
    allWorkouts.push(...user.workouts)
  })
  return allWorkouts;
}
