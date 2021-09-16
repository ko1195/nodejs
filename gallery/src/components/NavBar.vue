<template>
  <div class="nav_bar">
    <div>
      <b-nav card-header pills>
        <b-nav-item v-for="(link, index) in router_links" :key="index">
          <router-link :active="link.path === currentRoute" :to="link.path">
            {{ link.name }}</router-link
          >
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  data() {
    return {
      router_links: [{ path: "/", name: "Home" }],
    };
  },
};
</script>

<style>
</style>