<script setup lang="ts">
import  { type Workout, type User } from "@/model/users";
import {refUsers} from "@/viewModel/users";

const users = refUsers();

const user = defineProps<{
    user: User;
}>();



</script>

<template>

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img :src="user.user.avatar" alt="Image" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong><RouterLink :to="'/profiles/' + user.user.id" class="profilelink">{{ user.user.firstName }} {{ user.user.lastName }}</RouterLink></strong> 
          <br/><small>@{{ user.user.username }}</small>
        </p>
      </div>
    </div>
  </article>
</div>

</template>

<style scoped>
.image{
    border-radius:50%;
    overflow:hidden;
}

.image img{
    height:100%;
    object-fit:cover !important;
    object-position:center;
}

a {
  color: #000 !important;
}
</style>