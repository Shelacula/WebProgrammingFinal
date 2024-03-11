<script setup lang="ts">

</script>

<template>
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

</style>