<template>
  <div class="comment_form">
    <b-form-textarea
      class="textarea_comment"
      v-model="text"
      placeholder="Enter something..."
    ></b-form-textarea>
    <br />

    <b-button
      :disabled="!text.length"
      variant="success"
      class="send_comment"
      @click="sendComment()"
      >Send</b-button
    >
    <comments-list :photo_id="photo_id" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CommentsList from "./CommentsList";
export default {
  name: "comment-form",
  components: { CommentsList },
  props: {
    photo_id: {
      require: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapMutations("photos", ["addComment"]),
    sendComment() {
      this.addComment({
        photo_id: this.photo_id,
        author: "Vitalik",
        text: this.text,
        date: Date.now(),
      });
      this.text = "";
    },
  },
};
</script>

<style lang="scss">
.textarea_comment {
  padding-bottom: 25px;
}
</style>