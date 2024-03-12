<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, type Workout, getWorkouts, getUsers } from "@/model/users";
    import ActivityCard from "@/components/ActivityCard.vue";
    import {activeUser} from "@/components/NavBar.vue";

    

const users = ref([] as User[])
const workouts = ref([] as Workout[])

users.value = getUsers();
if(activeUser.value !== undefined){
    workouts.value = getWorkouts(activeUser.value);
}



let isActive = ref(false);
function toggleMenu() {
isActive.value = !isActive.value;
}

</script>



<template>
<div class="columns is-centered">

<div class="column is-half">
    <div class="block row">
        <button class="button is-primary is-fullwidth" @click="toggleMenu" :class="{ 'is-active': isActive }">Add Workout</button>
    </div>

    <ActivityCard  v-if="activeUser !== null" v-for="workout in workouts"
                    :workout = "workout"
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
            <input class="input" type="text" placeholder="Post Title">
        </div>
    </div>

    <div class="field">
        <label class="label">Date</label>
        <div class="control">
            <input class="input" type="text" placeholder="Date">
        </div>
    </div>

    <div class="field">
        <label class="label">Location</label>
        <div class="control">
            <input class="input" type="text" placeholder="Location">
        </div>
    </div>

    <div class="field">
        <label class="label">Duration</label>
        <div class="control">
            <input class="input" type="text" placeholder="Duration">
        </div>
    </div>

    <div class="field">
        <label class="label">Distance</label>
        <div class="control">
            <input class="input" type="text" placeholder="Distance">
        </div>
    </div>

    <div class="field">
        <label class="label">Picture</label>
        <div class="control">
            <input class="input" type="text" placeholder="Picture">
        </div>
    </div>


    <div class="field">
    <label class="label">Type</label>
    <div class="control">
        <div class="select">
        <select>
            <option>Running</option>
            <option>Walking</option>
            <option>Swimming</option>
            <option>Hiking</option>
        </select>
        </div>
    </div>
    </div>

    <div class="field is-grouped">
    <div class="control">
        <button class="button is-primary">Submit</button>
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

<style scoped>

</style>