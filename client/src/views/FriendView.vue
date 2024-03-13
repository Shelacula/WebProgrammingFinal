<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, type Workout, getUsers } from "@/model/users";
    import FriendCard from "@/components/FriendCard.vue";
    import {refUsers} from "@/viewModel/workouts"
    import {activeUser} from "@/components/NavBar.vue"

const users = refUsers();

</script>

<template>
    <div class="columns is-centered">
        <h1 v-if="activeUser == null">Please login to continue.</h1>
<div v-else class="column is-half">

        <template v-for="user in users">
        <FriendCard v-for="workout in user.workouts"
                    :workout = "workout"
                    :user = "user"
                    />
        </template>


    </div>
    </div>
    
</template>