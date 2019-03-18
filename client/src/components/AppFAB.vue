<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" app fab dark color="green" absolute top right>
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New User</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Name"
            v-model="name"
            prepend-icon="account_circle"
          ></v-text-field>
          <v-textarea
            auto-grow
            label="Bio"
            v-model="bio"
            prepend-icon="edit"
          ></v-textarea>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="submit">Add user</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import UserService from '../services/UserService';

export default {
  data() {
    return {
      name: '',
      bio: '',
    };
  },
  methods: {
    submit() {
      const newUser = {
        name: this.name,
        bio: this.bio,
      };

      UserService.createUser(newUser)
        .then(res => console.info(res))
        .catch(err => console.error(err));
    },
  },
};
</script>
