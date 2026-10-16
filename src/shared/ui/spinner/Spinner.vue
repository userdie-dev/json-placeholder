<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { LoaderIcon } from "@lucide/vue";
import { cn } from "cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <LoaderIcon
    role="status"
    aria-label="Loading"
    :class="cn('size-8 animate-spin text-yellow-500', props.class)"
  />
</template>
