<template>
  <div id="app">
    <!-- <nav-bar /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./assets/app.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
