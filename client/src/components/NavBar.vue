<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import {type User, getUsers} from '@/model/users';
import {getUserWorkouts} from "@/viewModel/workouts";
import { refSession, useLogin} from '@/viewModel/userSession';
import { parseStats } from '@/viewModel/stats';

let isActive = ref(false);
const users = ref([] as User[]);
const session = refSession();



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
  
          </div>
    
        <div class="navbar-end">
          <div class="navbar-item" v-if="session.user"><span>Welcome back, {{ session.user.firstName }}!</span></div>
          <div class="dropdown navbar-item is-hoverable">
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
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button" @click="doLogout()">
                <strong>Sign Out</strong>
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </nav>
  </template>