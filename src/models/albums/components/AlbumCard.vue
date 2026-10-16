<template>
  <Card class="w-full transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle class="text-lg leading-6 font-semibold first-letter:uppercase">
        {{ album.title }}
      </CardTitle>

      <p class="text-sm text-muted-foreground">
        {{ user?.name ?? "—" }} · Фото: {{ photos.length }}
      </p>
    </CardHeader>

    <CardContent>
      <LoadingBlock v-if="isLoading" />
      <div v-else class="grid grid-cols-2 gap-2">
        <img
          v-for="photo in preview"
          :key="photo.id"
          :src="photo.thumbnailUrl"
          :alt="photo.title"
          loading="lazy"
          class="aspect-square w-full rounded-md object-cover"
        />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { LoadingBlock } from "@/shared/ui/loadingOverlay";
import { usePhotosList } from "@/models/photos/queries/usePhotosList";
import { useUsersList } from "@/models/users/queries/useUsersList";
import type { AlbumDto } from "../api/albums.dto";

const props = defineProps<{ album: AlbumDto }>();

const { data, isLoading } = usePhotosList();
const { data: users } = useUsersList();

const photos = computed(
  () => data.value?.filter((p) => p.albumId === props.album.id) ?? [],
);

const preview = computed(() => photos.value.slice(0, 4));

const user = computed(() => users.value?.find((u) => u.id === props.album.userId));
</script>
