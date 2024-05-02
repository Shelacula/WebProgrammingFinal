<script setup lang="ts">
    import { ref } from 'vue'
    import FriendCard from "@/components/FriendCard.vue";
    import {refAllWorkouts} from "@/viewModel/workouts"
    import {refSession} from "@/viewModel/userSession";

const allWorkouts = refAllWorkouts();
let session = refSession();


</script>

<template>
    <div class="columns is-centered">
        <h1 v-if="!session.user">Please login to continue.</h1>
<div v-else class="column is-half">

        <FriendCard v-for="workout in allWorkouts"
                    :workout = "workout"
                    />


    </div>
    </div>
    
</template>