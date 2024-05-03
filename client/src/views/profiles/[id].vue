!<script setup lang="ts">
import {computed} from 'vue'
import { useRoute } from 'vue-router'
import { refUsers } from '@/viewModel/users';
import ActivityCard from "@/components/ActivityCard.vue";
import {searchUserWorkouts, refUserWorkouts, deleteWorkout} from "@/viewModel/workouts"
    
const route = useRoute();
const userRef = refUsers();
const workouts = refUserWorkouts();
const users = computed(() => userRef.value.find(user => user.id == +route.params.id[0]));
console.log(users)

searchUserWorkouts(+route.params.id[0]);


</script>

<template>

<div class="columns is-centered">
<div class="column is-half">
    <div class="block">
    <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="profileimg image is-48x48">
                <img
                    :src="users ? users.avatar : ''"
                    alt="Placeholder image"
                />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{ users ? users.firstName : ""}} {{ users ? users.lastName : ""}}</p>
                <p class="subtitle is-6">@{{ users ? users.username : "" }}</p>
            </div>
            </div>

            <div class="content">
            <b>Email:</b> {{ users ? users.emails : "" }}
            </div>
        </div>
    </div>
    </div>

    <h3 class="title is-3">Activity Feed</h3>
    <ActivityCard v-for="workout in workouts"
                    :workout = "workout"
                    @deleteWorkout="deleteWorkout"
                    />


</div>
</div>
        

</template>

<style scoped>
.profileimg{
    overflow:hidden;
    border-radius: 50%;
}

.profileimg img {
    height:100%;
    object-fit: cover;
    object-position: center;
}
</style>