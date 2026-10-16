<template>
  <div class="h-full grid gap-4 content-start">
    <div class="flex gap-4 justify-between">
      <Input v-model="search" placeholder="Поиск" class="max-w-150" />
    </div>

    <LoadingBlock v-if="isLoading" />

    <CardList v-else>
      <AlbumCard v-for="album in filtered" :key="album.id" :album />
    </CardList>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Input } from "@/shared/ui/input";
import { LoadingBlock } from "@/shared/ui/loadingOverlay";
import { CardList } from "@/shared/ui/cardList";
import { useSearch } from "@/shared/composable/useSearch/useSearch.ts";
import AlbumCard from "../components/AlbumCard.vue";
import { useAlbumsList } from "../queries/useAlbumsList";
import { useAlbumsStore } from "../store/albumsStore.ts";
import type { AlbumDto } from "../api/albums.dto.ts";

const { data, isLoading } = useAlbumsList();

const { search } = storeToRefs(useAlbumsStore());

const filtered = useSearch<AlbumDto>(search, data, "title");
</script>
