<script setup lang="ts">
    import { ref } from 'vue'
    import {refSession} from "@/viewModel/userSession";
    import {refUsers, deleteUser} from "@/viewModel/users"

    const users = refUsers();
    let session = refSession();

</script>

<template>   
   <div class="columns is-centered">
    <div class="column">

            <table v-if="session.user && session.user.isAdmin" class="table is-fullwidth">
  <thead>
    <tr>
      <th>Avatar</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Emails</th>
      <th>Username</th>
      <th>Admin?</th>
      <th>Tasks</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
      <td class="avatar"><img :src="user.avatar"></td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.emails }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.isAdmin }}</td>
      <td><button class="button">Edit</button> <button class="button" @click="deleteUser(user.id)">Delete</button></td>
    </tr>


  </tbody>
</table>

<h1 v-else>Login to an Admin account to view the Admin Panel.</h1>



        </div>
    
    
    </div>
    
</template>

<style scoped>
.avatar{
  padding: 0;
  height:50px;
  width:50px;
  overflow:hidden;
}

.avatar img{
  height:100% !important;
  width:100% !important;
  object-fit:cover;
  object-position:center;
  border-radius:.5em;
}
</style>