<script setup lang="ts">
import type { Workout } from "@/model/users";

const workouts = defineProps<{
    workout: Workout;
}>();

const emit = defineEmits<{
    deleteWorkout: [pid: number]
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
                {{ workout.distance }} mile {{ workout.type }}
                <br>
                {{ workout.duration }} minutes on {{ workout.date }}
                </div>
            </div>
            <button class="delete is-small" @click="emit('deleteWorkout', workout.pid)"></button>
        </div>
    </div>
</template>

<style scoped>
.activity{
    display: flex;
}

.activity .card-content{
    line-height: 2em;
}

.block{
    transition: .5s;
}

.delete{
    margin:10px;
    margin-left:auto;
}

.workout-title{
    font-size:2em;
}
</style>