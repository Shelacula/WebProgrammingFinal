<script setup lang="ts">
    import StatsCard from "@/components/StatsCard.vue";
    import {refSession} from "@/viewModel/userSession";
    import {refStats, parseStats} from "@/viewModel/stats"
    
    parseStats()
    const statCards = refStats();
    let session = refSession();
    
</script>

<template>
<div class="columns is-centered">

  <h1 v-if="!session.user">Please login to continue. (Select LOrgana for an admin account.)</h1>
<div v-else class="column is-half">

<StatsCard v-for="stats in statCards"
            :statBlock = "stats"      
            />

</div>

</div>
  </template>