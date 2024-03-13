<script setup lang="ts">
import { ref } from 'vue';
import type {statCards} from "@/viewModel/stats"

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
  console.log(isActive.value);
}

const workouts = defineProps<{
    statBlock: statCards;
}>();
</script>

<template>

<div class="block">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ statBlock.title }}
        </p>
        <a @click="toggleMenu" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="ri-corner-right-down-line"></i>
          </span>
        </a>
      </header>
      <div class="card-content" :class="{ 'is-active': isActive }">
        <div class="content">

          <div class="columns">
            <div class="column">
              <div class="block">
                <h3 class="title is-5 center">DISTANCE</h3>
                <div class="center">{{ statBlock.distance }} miles</div>
              </div>
              <div class="block">
                <h3 class="title is-5 center">TIME</h3>
                <div class="center">{{ statBlock.time }} minutes</div>
              </div>
            </div>
            <div class="column">
              <div class="block">
                <h3 class="title is-5 center">PACE</h3>
                <div class="center">{{ statBlock.pace }} mi/min</div>
              </div>
              <div class="block">
                <h3 class="title is-5 center">CALORIES</h3>
                <div class="center">{{ statBlock.calories }} calories</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

.card-content {
  transition: .3s;
}

.card-content.is-active{
  padding:0 ;
  height: 0 ;
  overflow: hidden;
}

</style>