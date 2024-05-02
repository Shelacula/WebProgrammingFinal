!<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { refUsers } from '@/viewModel/users';

const route = useRoute();
const userRef = refUsers();
const users = userRef.value.find(user => user.id == +route.params.id[0]);


</script>

<template>

<div class="columns is-centered">
<div class="column is-half">
    <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="profileimg image is-48x48">
          <img
            :src="users ? users.avatar : ''"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ users ? users.firstName : ""}} {{ users ? users.lastName : ""}}</p>
        <p class="subtitle is-6">@{{ users ? users.username : "" }}</p>
      </div>
    </div>

    <div class="content">
      <b>Email:</b> {{ users ? users.emails : "" }}
    </div>
  </div>
</div>

</div>
</div>
        

</template>

<style scoped>
.profileimg{
    overflow:hidden;
    border-radius: 50%;
}

.profileimg img {
    height:100%;
    object-fit: cover;
    object-position: center;
}
</style>