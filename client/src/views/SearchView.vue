!<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import {type User} from "@/model/users"
import {searchUsers} from "@/viewModel/users"


const route = useRoute();
const search = route.params.searchKey.toString()
const foundUsers = ref([] as User[])

console.log(search)

if(search != "empty"){
    searchUsers(search)
    .then((data) => {
    if(data){
        foundUsers.value = data
    }
    })
}


</script>

<template>
<div class="columns is-centered">
    <div class="column is-half">



    </div>
</div>

</template>

<style scoped>

</style>