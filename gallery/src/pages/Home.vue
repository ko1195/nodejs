<template>
  <div class="home">
    <h1>All photos</h1>
    <photos-list :photos="photos" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PhotosList from "../components/PhotosList";
export default {
  name: "home",
  components: {
    PhotosList,
  },
  computed: mapState({
    photos: (state) => state.photos.all,
  }),
  created() {
    this.$store.dispatch("photos/getAll", "asdasd");
  },
};
</script>

<style lang="scss">
</style>