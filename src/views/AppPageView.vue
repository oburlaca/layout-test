<template>
  <!-- Provides the application the proper gutter -->
  <v-container fluid>
    <h1>Page Heading</h1>
    <p>Vuetify comes with a built-in layout system that just works out of the box. 
      Components such as v-app-bar and v-footer support a special property named app. 
      This property tells Vuetify that the corresponding component is part of your application’s layout. 
      In this section you will learn the basics of how the layout system works, how to combine multiple layout components, and how to change them all dynamically.
      </p>

    <p>There are 2 primary layout components in Vuetify, v-app and v-main. 
      The v-app component is the root of your application and a direct replacement for the default Vue entrypoint,
      The v-main component is a semantic replacement for the main HTML element and the root of your application’s content.
       When Vue mounts to the DOM, any Vuetify component that is part of the layout registers its current height and/or width with the framework core. 
       The v-main component then takes these values and adjusts its container size.</p>
  </v-container>
</template>

<script>
export default {
  name: "AppPageView"
};
</script>
