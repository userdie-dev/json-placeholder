<template>
  <div class="h-full grid gap-4 content-start">
    <div class="flex gap-4 justify-between">
      <Input v-model="search" placeholder="Поиск" class="max-w-150" />

      <Button @click="openModal(null)">Добавить пост</Button>
    </div>

    <div
      class="min-h-0 content-start overflow-y-auto grid gap-4 auto-rows-max grid-cols-1 pr-4"
    >
      <PostCard
        v-for="post in filtered"
        :key="post.id"
        :post
        @click="openModal(post.id)"
      />
    </div>
  </div>

  <PostModal v-model:open="modal" :id />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import PostCard from "../components/PostCard.vue";
import { usePostsList } from "../queries/usePostsList";
import { usePostsStore } from "../store/postsUiStore.ts";
import PostModal from "../components/PostModal.vue";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useSearch } from "@/shared/composable/useSearch/useSearch.ts";
import type { PostDto } from "../api/posts.dto.ts";

const { data } = usePostsList();

const { search, modal, id } = storeToRefs(usePostsStore());

const filtered = useSearch<PostDto>(search, data, "title");

const openModal = (i: number | null) => {
  modal.value = true;
  id.value = i;
};
</script>
