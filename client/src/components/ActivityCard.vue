<script setup lang="ts">
import type { Workout } from "@/model/users";

const workouts = defineProps<{
    workout: Workout;
}>();

</script>

<template>
    <div class="block">
        <div class="card activity">
            <div class="card-content">
                <div class="content">
                    <span class="workout-title">{{ workout.title }}</span>
                <br>
                    {{ workout.location }}
                <br>
                {{ workout.duration }} on {{ workout.date }}
                <br>
                {{ workout.distance }} {{ workout.type }}
                </div>
            </div>
            <button class="delete is-small"></button>
        </div>
    </div>
</template>

<style scoped>
.activity{
    display: flex;
}

.delete{
    margin:10px;
    margin-left:auto;
}

.workout-title{
    font-size:2em;
}
</style>