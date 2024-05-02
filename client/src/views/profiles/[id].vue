!<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div>
        <span>A profile page.</span>
        <span>Current User: {{ $route.params.id }}</span>
    </div>
</template>

<style scoped>

</style>