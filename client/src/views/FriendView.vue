<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, type Workout, getAllWorkouts, getUsers } from "@/model/users";
    import FriendCard from "@/components/FriendCard.vue";
    import {activeUser} from "@/components/NavBar.vue";

    

const users = ref([] as User[])
const workouts = ref([] as Workout[])
users.value = getUsers();

if(activeUser.value !== undefined){
    workouts.value = getAllWorkouts();
}


</script>

<template>
    <div class="columns is-centered">
    
    <div class="column row">

        <template v-for="user in users">
        <FriendCard v-for="workout in user.workouts"
                    :workout = "workout"
                    :user = "user"
                    />
        </template>


    </div>
    </div>
    
</template>