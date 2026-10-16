<template>
  <div class="flex gap-3">
    <Avatar class="mt-0.5 shrink-0">
      <AvatarImage :src="comment.avatar" :alt="comment.email" />
      <AvatarFallback>{{ initials }}</AvatarFallback>
    </Avatar>

    <div class="min-w-0 flex-1 rounded-2xl bg-muted/50 px-4 py-3">
      <p class="truncate text-sm font-medium">{{ comment.email }}</p>
      <p class="mt-1 text-sm leading-6 text-muted-foreground first-letter:uppercase">
        {{ comment.body }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import type { Comment } from "../model/comments.types";

const props = defineProps<{
  comment: Comment;
}>();

const initials = computed(() => props.comment.email.slice(0, 2).toUpperCase());
</script>
