import { api } from "../viewModel/userSession";
import { reactive } from "vue";
import { ref } from 'vue'
import { type User, type Workout, getUsers, getAllWorkouts } from "@/model/users";
import {refSession} from "@/viewModel/userSession";

const workouts = ref([] as Workout[])
const allWorkouts  = ref([] as Workout[]);
let session = refSession();

export async function getUserWorkouts(){
    if(session.user){
        const data = await api<Workout[]>("api/v1/workouts/" + session.user.id);
        workouts.value = data ? data.data : [];
    }
}

export async function saveWorkout(workout : Workout){
    workouts.value.push(workout)
    await api<Workout[]>("api/v1/workouts/", workout)
}

export async function deleteWorkout(pid : number){
    const index = workouts.value.findIndex(item => item.pid == pid);
    if (index >= 0) {
        const deleted = workouts.value.splice(index, 1);}
    await api<Workout>("api/v1/workouts/" + pid, null, 'DELETE')
}


export const refWorkouts = () => workouts;
export const refAllWorkouts = () => allWorkouts;

