import { api } from "../viewModel/userSession";

import { ref } from 'vue'
import { type User, type Workout, getWorkouts, getUsers } from "@/model/users";
import {refSession} from "@/viewModel/userSession";

export const users = ref([] as User[])
const workouts = ref([] as Workout[])
let session = refSession();

getUsers()
    .then((data) => {
    if(data){
        users.value = data
    }
    })

export async function getUserWorkouts(){
    if(session.user){
        const data = await api<Workout[]>("api/v1/workouts/" + session.user.id);
        workouts.value = data ? data.data : [];
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

