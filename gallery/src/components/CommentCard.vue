<template>
  <div class="comment_card-block">
    <b-card bg-variant="white" text-variant="dark" :title="comment.author">
      <b-card-text>
        {{ comment.text }}
      </b-card-text>
      <b-badge variant="secondary">{{
        new Date(comment.date).toLocaleString("ru", date_params)
      }}</b-badge>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "comment-card",
  props: {
    comment: { required: true, default: {} },
  },
  data() {
    return {
      date_params: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      },
    };
  },
};
</script>

<style>
</style>