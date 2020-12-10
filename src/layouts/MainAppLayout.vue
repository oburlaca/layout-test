<template>
  <v-app>
    <TheAppBar></TheAppBar>
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>

    <TheBottomNav></TheBottomNav>
  </v-app>
</template>        


<script>
import TheAppBar from "../components/TheAppBar";
import TheBottomNav from "../components/TheBottomNav";

export default {
  name: "MainAppLayout",

components: {
    TheAppBar,
    TheBottomNav,
  }

};
</script>