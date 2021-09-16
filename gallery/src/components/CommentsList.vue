<template>
  <div class="comments_list">
    <comment-card
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    />
  </div>
</template>

<script>
import CommentCard from "./CommentCard";
export default {
  name: "comments-list",
  components: { CommentCard },
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.comments_list {
  overflow: auto;
  max-height: 200px;
  margin-top: 10px;
}
</style>