<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, type Workout, getWorkouts, getUsers } from "@/model/users";
    import StatsCard from "@/components/StatsCard.vue";
    import {refWorkouts} from "@/viewModel/workouts"
    
const workouts = refWorkouts();
const statCardsRef = ref([] as statCards[])

export type statCards = { title: string, distance: number, pace: string, time: number, calories: number }

const statCards = [
  {
    "title": "Today",
    "distance": 0,
    "pace": "",
    "time": 0,
    "calories": 0
  },
  {
    "title": "This Week",
    "distance": 0,
    "pace": "",
    "time": 0,
    "calories": 0
  },
  {
    "title": "Overall",
    "distance": 0,
    "pace": "",
    "time": 0,
    "calories": 0
  }
]

workouts.value.forEach(function(workout){
    const dateArr = workout.date.split('-')
    const newDate = new Date(parseInt(dateArr[0]), parseInt(dateArr[1]) -1, parseInt(dateArr[2]))
    const todaysDate = new Date();
    const weekAgo = new Date(new Date().setDate(new Date().getDate() - 7));
    let newDistance = parseInt(workout.distance.replace(/[^0-9]/g, ''));
    let newTime = parseInt(workout.duration.replace(/[^0-9]/g, ''));

      statCards[2].distance = statCards[2].distance + newDistance;
      statCards[2].time = statCards[2].time + newTime;
      statCards[2].pace = (statCards[2].distance/statCards[2].time).toFixed(2);

    if(newDate.setHours(0,0,0,0) >= weekAgo.setHours(0,0,0,0)) {
      statCards[1].distance = statCards[1].distance + newDistance;
      statCards[1].time = statCards[1].time + newTime;
      statCards[1].pace = (statCards[1].distance/statCards[2].time).toFixed(2);
    } else if(newDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
      statCards[0].distance = statCards[0].distance + newDistance;
      statCards[0].time = statCards[0].time + newTime;
      statCards[0].pace = (statCards[0].distance/statCards[2].time).toFixed(2);
    }
  })
  
 statCardsRef.value = statCards
 console.log(statCardsRef.value[0].distance);

</script>

<template>
<div class="columns is-centered">

<div class="column is-half">

<StatsCard v-for="stats in statCards"
            :statBlock = "stats"        
            />

</div>

</div>
  </template>