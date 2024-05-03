<script setup lang="ts">
    import { ref } from 'vue'
    import FriendCard from "@/components/FriendCard.vue";
    import {refAllWorkouts} from "@/viewModel/workouts"
    import {refSession} from "@/viewModel/userSession";
    import { getAllWorkouts } from "@/model/users";

const allWorkouts = refAllWorkouts();
let session = refSession();

getAllWorkouts()
    .then((data) => {
    if(data){
        data.sort(function(a,b){
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
          });
          allWorkouts.value = data;
    }
    })

</script>

<template>
    <div class="columns is-centered">

<div class="column is-half">

        <FriendCard v-for="workout in allWorkouts"
                    :workout = "workout"
                    :key = "workout.pid"
                    />


    </div>
    </div>
    
</template>