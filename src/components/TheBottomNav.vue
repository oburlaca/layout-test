<template>
  <v-bottom-navigation app color="primary" grow>
    <v-btn :to="{ name: 'main-app-list' }" exact>
      <span>App List</span>
      <v-icon>mdi-page-layout-header-footer</v-icon>
    </v-btn>
    
    <v-btn :to="{ name: 'main-app-page' }" exact>
      <span>App Page</span>
      <v-icon>mdi-page-layout-header-footer</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'simple-page' }">
      <span>Simple Page</span>
      <v-icon>mdi-file-document-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "TheBottomNav"
};
</script>