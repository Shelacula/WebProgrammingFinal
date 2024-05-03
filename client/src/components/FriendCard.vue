<script setup lang="ts">
import  { type Workout, type User } from "@/model/users";
import {refUsers} from "@/viewModel/users";

const users = refUsers();

const workouts = defineProps<{
    workout: Workout;
}>();

const workoutUser = users.value.find(user => user.id == workouts.workout.uid);
const workoutUserImg = workoutUser ? workoutUser.avatar : "";
const workoutUserFirstName = workoutUser ?  workoutUser.firstName : "Blank";
const workoutUserLastName = workoutUser ?  workoutUser.lastName : "Blank";
const workoutUserUsername = workoutUser ?  workoutUser.username : "Blank"

</script>

<template>

<div class="block">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img :src="workout.picture != '' ? workout.picture : 'https://i.imgur.com/LWvTlRU.png' " alt="Post Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48 avatar">
                        <img :src="workoutUserImg" alt="User Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"><RouterLink :to="'/profiles/' + (workoutUser ? workoutUser.id : 0)" class="profilelink">{{ workoutUserFirstName }} {{ workoutUserLastName }}</RouterLink></p>
                        <p class="subtitle is-6">@{{ workoutUserUsername }}</p>
                    </div>
                    </div>
    
                    <div class="content">
                    <p class="friend-title">{{ workout.title }}</p> 
                    
                    <time>{{ workout.distance }} mile(s) {{ workout.type }} on {{workout.date}}</time>
                    </div>
                </div>
            </div>
        </div>


</template>

<style scoped>
.avatar{
    overflow:hidden;
    border-radius:.5em;
}

.avatar img{
    object-fit:cover;
    object-position:center;
    height:100%;
    width:100%;
    max-height: unset;
    max-width: unset;
}

.friend-title{
    font-size:1.2em;
    font-weight:bold;
}

a {
  color: #000 !important;
}
</style>