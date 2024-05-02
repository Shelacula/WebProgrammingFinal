<script setup lang="ts">
import { type User } from "@/model/users";
import {addUser} from "@/viewModel/users"

const newUser: User = {
    "firstName": "",
    "lastName": "",
    "username": "",
    "id": 0,
    "isAdmin": false,
    "emails": [""],
    "avatar": ""  
};

</script>

<template>
<div class="columns is-centered">
<div class="column is-half">
<div class="field">
    <label class="label">Username</label>
    <div class="control">
        <input class="input" type="text" placeholder="Username" v-model="newUser.username">
    </div>
</div>

<div class="field">
    <label class="label">First Name</label>
    <div class="control">
        <input class="input" type="text" placeholder="First Name" v-model="newUser.firstName">
    </div>
</div>

<div class="field">
    <label class="label">Last Name</label>
    <div class="control">
        <input class="input" type="text" placeholder="Last Name" v-model="newUser.lastName">
    </div>
</div>

<div class="field">
    <label class="label">Emails</label>
    <div class="control">
        <input class="input" type="text" placeholder="Email" v-model="newUser.emails">
    </div>
</div>

<div class="field">
    <label class="label">Avatar Image</label>
    <div class="control">
        <input class="input" type="text" placeholder="Avatar URL" v-model="newUser.avatar">
    </div>
</div>


<div class="field is-grouped">
<div class="control">
    <button class="button is-primary" @click="addUser(newUser)">Create Account</button>
</div>
</div>
</div>
</div>
</template>

<style scoped>

</style>