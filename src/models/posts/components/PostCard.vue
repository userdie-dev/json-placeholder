<template>
  <Card class="w-full transition-shadow hover:shadow-md">
    <CardHeader class="flex items-start justify-between gap-4">
      <CardTitle class="text-2xl leading-8 font-semibold first-letter:uppercase">
        {{ post.title }}
      </CardTitle>

      <Button
        variant="ghost"
        size="icon"
        class="shrink-0"
        aria-label="Редактировать пост"
        @click="emit('click')"
      >
        <SquarePen />
      </Button>
    </CardHeader>

    <CardContent>
      <div class="flex flex-col gap-6">
        <p class="text-base leading-7 text-muted-foreground first-letter:uppercase">
          {{ post.body }}
        </p>

        <Separator />

        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-medium text-muted-foreground">
            Комментарии · {{ comments.length }}
          </h3>
          <LoadingBlock v-if="isLoading" />
          <CommentList v-else :comments />
          <CommentForm :postId="post.id" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import type { Post } from "../model/post.types";
import { Button } from "@/shared/ui/button";
import { SquarePen } from "@lucide/vue";
import CommentList from "@/models/comments/components/CommentList.vue";
import CommentForm from "@/models/comments/components/CommentForm.vue";
import { useCommentList } from "@/models/comments/queries/useUsersList";
import { computed } from "vue";
import { Separator } from "@/shared/ui/separator";
import { LoadingBlock } from "@/shared/ui/loadingOverlay";

const props = defineProps<{ post: Post }>();
const emit = defineEmits(["click"]);

const { data, isLoading } = useCommentList();

const comments = computed(
  () => data.value?.filter((t) => t.postId === props.post.id) ?? [],
);
</script>
