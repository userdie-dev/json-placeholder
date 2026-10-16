<template>
  <div class="h-full grid gap-4">
    <div class="flex gap-4 justify-between">
      <Input v-model="search" placeholder="Поиск" class="max-w-150" />

      <Button @click="openModal(null)">Добавить пост</Button>
    </div>

    <CardList>
      <PostCard
        v-for="post in data?.filter((el) => el.title.includes(search))"
        :key="post.id"
        :post
        @click="openModal(post.id)"
      />
    </CardList>
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
import { CardList } from "@/shared/ui/cardList";

const { data } = usePostsList();

const { search, modal, id } = storeToRefs(usePostsStore());

const openModal = (i: number | null) => {
  modal.value = true;
  id.value = i;
};
</script>
