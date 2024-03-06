<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, getUsers } from "@/model/users";

    const users = ref([] as User[])

    users.value = getUsers();

    function removeUser(user: User){
        
    }

</script>

<template>   
   <div class="columns is-centered">
    <div class="column">

            <table class="table is-fullwidth">
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
      <td><img :src="user.avatar"></td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.emails }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.isAdmin }}</td>
      <td><button class="button">Edit</button> <button class="button">Delete</button></td>
    </tr>


  </tbody>
</table>



        </div>
    
    
    </div>
    
</template>