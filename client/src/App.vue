<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view/>
      <AppFAB />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import AppFAB from '@/components/AppFAB.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    AppFAB,
  },
  data() {
    return {
      //
    };
  },
};
</script>
