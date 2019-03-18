<template>
  <v-container class="my-5">
    <v-layout row class="mb-3">
      <v-card
        v-for="user in users"
        :key="user.id"
        class="mx-2"
        width="400"
      >
        <v-card-title primary-title class="headline">{{ user.name }}</v-card-title>
        <v-card-text>{{ user.bio }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat>Update</v-btn>
          <v-btn flat color="red">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import UserService from '@/services/UserService';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    UserService.getUsers()
      .then((res) => {
        this.users = res.data;
      })
      .catch(err => console.log(err));
  },
};
</script>

<style scoped>
</style>
