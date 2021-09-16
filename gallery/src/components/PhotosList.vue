<template>
  <div class="photos">
    <div class="filters">
      <photo-filter />
    </div>

    <div class="photos--list">
      <b-container class="bv-example-row">
        <b-row>
          <b-col
            xl="3"
            lg="4"
            md="4"
            sm="6"
            v-for="(photo, index) in photo_filters"
            :key="index"
          >
            <photo-card :photo="photo" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import PhotoCard from "./PhotoCard";
import PhotoFilter from "./PhotoFilter";
import { mapGetters } from "vuex";
export default {
  name: "photos-list",
  components: {
    PhotoCard,
    PhotoFilter,
  },
  wathc: {
    filters: function () {
      console.log(this.photo_filters);
    },
  },
  computed: {
    ...mapGetters("photos", ["photo_filters", "filters"]),
  },
  props: {
    photos: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 576px) {
  .photo_card {
    display: flex;
    justify-content: center;
  }
}
</style>