<template>
  <div class="photo_card">
    <b-card
      :img-src="photo.url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text class="photo_card--title"> {{ photo.title }}</b-card-text>
      <template #footer>
        <b-button variant="outline-primary" @click="togglePhotoLike(photo.id)">
          <b-icon
            :icon="photo.like ? 'heart-fill' : 'heart'"
            aria-hidden="true"
          ></b-icon>
        </b-button>
        <b-button variant="outline-primary" v-b-modal="'photo-' + photo.id">
          <b-icon icon="chat-left-dots" aria-hidden="true"></b-icon>
        </b-button>
        <b-button variant="outline-primary" @click="togglePhotoPick(photo.id)">
          <b-icon
            :icon="photo.pick ? 'bookmark-star-fill' : 'bookmarks'"
            aria-hidden="true"
          ></b-icon>
        </b-button>
        <b-button variant="outline-primary" @click="togglePhotoSave(photo.id)">
          <b-icon
            :icon="photo.save ? 'cloud-check-fill' : 'cloud-download'"
            aria-hidden="true"
          ></b-icon>
        </b-button>
      </template>
      <photo-card-detail :photo="photo" />
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import PhotoCardDetail from "./PhotoCardDetail";
export default {
  name: "photo-card",
  components: { PhotoCardDetail },
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: mapMutations("photos", [
    "togglePhotoLike",
    "togglePhotoPick",
    "togglePhotoSave",
  ]),
};
</script>

<style lang="scss">
.photo_card {
  width: calc(100% - 10px);
  margin: 0 auto;
  &--title {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>