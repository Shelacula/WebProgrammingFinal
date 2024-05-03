<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, type Workout} from "@/model/users";
    import ActivityCard from "@/components/ActivityCard.vue";
    import {refSession} from "@/viewModel/userSession";
    import {refWorkouts, deleteWorkout, saveWorkout} from "@/viewModel/workouts"
    

    
const workouts = refWorkouts();
let isActive = ref(false);
let session = refSession();

function toggleMenu() {
isActive.value = !isActive.value;
}

const newWorkout: Workout = {
    pid: 0,
    uid: session.user ? session.user.id : 0,
    title: "",
    date: "",
    duration: "",
    distance: "",
    location: "",
    picture: "",
    type: ""    
};

</script>



<template>
<div class="columns is-centered">

<div class="column is-half">
    
    <div class="block row" >
        <button class="button is-primary is-fullwidth" @click="toggleMenu" :class="{ 'is-active': isActive }">Add Workout</button>
    </div>

    <ActivityCard v-for="workout in workouts"
                    :workout = "workout"
                    @deleteWorkout="deleteWorkout"
                    />

</div>

</div>




<div id="modal-js-example" class="modal" :class="{ 'is-active': isActive } ">
  <div class="modal-background" @click="toggleMenu" :class="{ 'is-active': isActive }"></div>

  <div class="modal-content">

    <div class="box">


<div class="field">
    <label class="label">Title</label>
    <div class="control">
        <input class="input" type="text" placeholder="Post Title" v-model="newWorkout.title">
    </div>
</div>

<div class="field">
    <label class="label">Date</label>
    <div class="control">
        <input class="input" type="date" placeholder="Date" v-model="newWorkout.date">
    </div>
</div>

<div class="field">
    <label class="label">Location</label>
    <div class="control">
        <input class="input" type="text" placeholder="Location" v-model="newWorkout.location">
    </div>
</div>

<div class="field">
    <label class="label">Duration</label>
    <div class="control">
        <input class="input" type="text" placeholder="Duration" v-model="newWorkout.duration">
    </div>
</div>

<div class="field">
    <label class="label">Distance</label>
    <div class="control">
        <input class="input" type="text" placeholder="Distance" v-model="newWorkout.distance">
    </div>
</div>

<div class="field">
    <label class="label">Picture</label>
    <div class="control">
        <input class="input" type="text" placeholder="Picture URL" v-model="newWorkout.picture">
    </div>
</div>


<div class="field">
<label class="label">Type</label>
<div class="control">
    <div class="select">
    <select v-model="newWorkout.type">
        <option disabled value="">Please select one</option>
        <option>Run</option>
        <option>Walk</option>
        <option>Swim</option>
        <option>Hike</option>
    </select>
    </div>
</div>
</div>

<div class="field is-grouped">
<div class="control">
    <button class="button is-primary" @click="saveWorkout(newWorkout); toggleMenu()" :class="{ 'is-active': isActive }">Submit</button>
</div>
<div class="control">
    <button class="button is-link is-light" @click="toggleMenu" :class="{ 'is-active': isActive }">Cancel</button>
</div>
</div>

</div>
    
  </div>

  <button class="modal-close is-large" aria-label="close" @click="toggleMenu" :class="{ 'is-active': isActive }"></button>
</div>



</template>