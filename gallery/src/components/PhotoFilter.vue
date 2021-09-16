<template>
  <div class="photo_filter">
    <div class="filter_list">
      <b-list-group-item
        class="filter_item"
        v-for="(param, index) in filter_params"
        :key="index"
      >
        <b-form-checkbox :value="param" v-model="filters"
          >{{ param }}
        </b-form-checkbox>
      </b-list-group-item>

      <b-button
        variant="danger"
        v-if="filters.length"
        @click="setFiltersParams([])"
        >reset</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "photo-filter",
  computed: {
    filters: {
      get() {
        return this.$store.state.photos.filters;
      },
      set(value) {
        this.setFiltersParams(value);
      },
    },
  },
  data() {
    return {
      filter_params: ["save", "pick", "like"],
    };
  },
  methods: {
    ...mapMutations("photos", ["setFiltersParams"]),
  },
};
</script>

<style lang="scss" scoped>
.photo_filter {
  padding: 25px 0;
  .filter_list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>