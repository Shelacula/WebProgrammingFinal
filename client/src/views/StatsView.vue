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

<div class="column is-half">

<StatsCard v-for="stats in statCards"
            :statBlock = "stats"      
            />

</div>

</div>
  </template>