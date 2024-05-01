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
        allWorkouts.value = data;
        allWorkouts.value.sort(function(a,b){
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
          });
    }
    })

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