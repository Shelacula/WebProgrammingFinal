import { ref } from 'vue'
import { type User, type Workout, getWorkouts, getUsers } from "@/model/users";
import {activeUser} from "@/components/NavBar.vue";

export const users = ref([] as User[])
const workouts = ref([] as Workout[])

users.value = getUsers();

export function getUserWorkouts(){
    if(activeUser.value !== undefined){
        workouts.value = getWorkouts(activeUser.value);
    }
}

export function saveWorkout(workout : Workout){
    console.log(workout)
    workouts.value.push(workout)
}

export function deleteWorkout(index : number){
    workouts.value.splice(index, 1);
}

export const refWorkouts = () => workouts;

