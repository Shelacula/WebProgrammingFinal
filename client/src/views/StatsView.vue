<script setup lang="ts">
    import StatsCard from "@/components/StatsCard.vue";
    import {activeUser} from "@/components/NavBar.vue";
    import {refStats, parseStats} from "@/viewModel/stats"
    
    parseStats()
    const statCards = refStats();
    
</script>

<template>
<div class="columns is-centered">

  <h1 v-if="activeUser == null">Please login to continue. (Select LOrgana for an admin account.)</h1>
<div v-else class="column is-half">

<StatsCard v-for="stats in statCards"
            :statBlock = "stats"      
            />

</div>

</div>
  </template>