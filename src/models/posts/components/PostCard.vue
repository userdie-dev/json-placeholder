<template>
  <Card
    class="cursor-pointer transition-all hover:-translate-y-0.5 hover:ring-primary/40 dark:hover:bg-muted"
  >
    <CardHeader>
      <CardTitle class="truncate text-[20px]">{{ post.title }}</CardTitle>
    </CardHeader>

    <CardContent class="text-muted-foreground">{{ post.body }}</CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import type { Post } from "../model/post.types";

defineProps<{ post: Post }>();
</script>
