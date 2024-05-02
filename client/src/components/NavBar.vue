<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import {type User, getUsers} from '@/model/users';
import {getUserWorkouts} from "@/viewModel/workouts";
import { refSession, useLogin} from '@/viewModel/userSession';
import { parseStats } from '@/viewModel/stats';
import { users } from '@/viewModel/users';

let isActive = ref(false);
const session = refSession();

getUsers()
        .then((data) => {
          if(data){
              users.value = data}})
        .catch((error) => console.error(error));
    ;


function toggleMenu() {
  isActive.value = !isActive.value;
}

const { login, logout } = useLogin();

function doLogin(user: User) {
    login(user);
}

function doLogout() {
    logout();
}

</script>


<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <RouterLink to="/" class="navbar-item">
        Home
        </RouterLink>

        <RouterLink to="/activity" class="navbar-item">
          <i class="ri-run-fill"></i><span>My Activity</span>
        </RouterLink>
  
        <RouterLink to="/friend" class="navbar-item">
          <i class="ri-user-smile-line"></i>  <span>Friend Feed</span>
        </RouterLink>
    
        <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive }" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
    
            <RouterLink v-if="session.user && session.user.isAdmin" to ="/admin" class="navbar-item">
              Admin Panel
            </RouterLink>

            <div class="field navbar-item">
            <div class="control">
                <input class="input" type="text" placeholder="Search People">
            </div>
            <button class="button search">
              <span class="icon is-small">
                <i class="ri-search-line"></i>
              </span>
            </button>
            </div>
  
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item" v-if="session.user"><span>Welcome back, {{ session.user.firstName }}!</span></div>
          <div class="dropdown navbar-item is-hoverable" v-if="!session.user">
                <div class="dropdown-trigger">

                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Choose Account</span>
                  </button>
                </div>

                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item"  v-for="user in users" @click="doLogin(user); getUserWorkouts(); parseStats()">
                      <span>{{ user.username }}</span>
                    </a>
                  </div>
                </div>
            </div>


          <div class="navbar-item">
            <div class="buttons">
              <RouterLink v-if="!session.user" to ="/signup" class="button is-primary">
              Sign Up
              </RouterLink>
              <a class="button" @click="doLogout()" v-if="session.user">
                <strong>Sign Out</strong>
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </nav>
  </template>

<style scoped>
.search {
  background: transparent;
  border: none;
  transition: .2s;
  margin-left: 10px;
}

.search:hover{
  border:unset;
  border: 1px solid #dbdbdb;
}

.icon{
  color: #fff;
}


</style>