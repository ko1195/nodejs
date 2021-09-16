<template>
  <div class="photo-card--detail">
    <b-modal :id="'photo-' + photo.id" :title="photo.title" hide-footer>
      <b-card>
        <b-row>
          <b-col cols="12">
            <b-card-img
              :src="photo.url"
              alt="Image"
              class="img-body rounded-0"
            ></b-card-img>
          </b-col>
          <b-col cols="12">
            <comment-form :photo_id="photo.id" />
          </b-col>
        </b-row>
      </b-card>
      <comments-list :comments="photo.comments" />
    </b-modal>
  </div>
</template>

<script>
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default {
  name: "photo-card-detail",
  components: { CommentForm, CommentsList },
  props: {
    photo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.img-body {
  max-height: 400px;
}
</style>