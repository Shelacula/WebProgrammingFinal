!<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import {type User} from "@/model/users"
import {searchUsers} from "@/viewModel/users"


const route = useRoute();
const search = route.params.searchKey.toString()
const foundUsers = ref([] as User[])

searchUsers(search)
    .then((data) => {
    if(data){
        foundUsers.value = data
    }
    })

</script>

<template>


</template>

<style scoped>

</style>