import workouts from '@/data/workouts.json';

export interface Workout{
    title: string;
    date: string,
    duration: string,
    distance: string,
    location: string,
    picture: string,
    type: string,

}

export function getWorkouts(): Workout[]{
    return workouts.workouts;
}