<script setup lang="ts">
import  { type Workout, type User } from "@/model/users";

const workouts = defineProps<{
    workout: Workout;
    user: User;
}>();
</script>

<template>

<div class="block">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ user.firstName }} {{ user.lastName }}</p>
                        <p class="subtitle is-6">@{{ user.username }}</p>
                    </div>
                    </div>
    
                    <div class="content">
                    {{ workout.title }} 
                    <br>
                    <time>{{ workout.distance }} miles on {{workout.date}}</time>
                    </div>
                </div>
            </div>
        </div>


</template>

<style scoped>

</style>