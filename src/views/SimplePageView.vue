<template>
  <v-container fluid fill-height class="blue darken-3">
    <v-row align="center" justify="center">
      <v-btn :to="{ name: 'main-app-list' }" exact class="px-15"
        ><v-icon left>mdi-application</v-icon>Back to app</v-btn
      >
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "Login",
};
</script>