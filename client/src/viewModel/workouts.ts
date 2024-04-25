import { ref } from 'vue'
import { type User, type Workout, getWorkouts, getUsers } from "@/model/users";
import {refSession} from "@/viewModel/userSession";

export const users = ref([] as User[])
const workouts = ref([] as Workout[])
let session = refSession();

users.value = await getUsers();

export function getUserWorkouts(){
    if(session.user){
        workouts.value = getWorkouts(session.user);
    }
}

export function saveWorkout(workout : Workout){
    workouts.value.push(workout)
}

export function deleteWorkout(index : number){
    workouts.value.splice(index, 1);
}

export const refWorkouts = () => workouts;
export const refUsers = () => users;

