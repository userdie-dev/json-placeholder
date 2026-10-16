<template>
  <div class="flex flex-col gap-4">
    <Comment v-for="comment in comments" :comment :key="comment.id" />
  </div>
</template>

<script setup lang="ts">
import type { Comment as CommentType } from "../model/comments.types.ts";
import Comment from "./Comment.vue";

defineProps<{
  comments: CommentType[];
}>();
</script>
