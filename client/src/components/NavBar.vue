<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
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
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin Panel
            </a>
    
            <div class="navbar-dropdown">
              <RouterLink to ="/admin" class="navbar-item">
                Users
              </RouterLink>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>