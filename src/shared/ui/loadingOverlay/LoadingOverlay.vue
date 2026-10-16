<template>
  <div class="relative">
    <fieldset :disabled="isLoading">
      <slot></slot>
    </fieldset>

    <div
      class="absolute inset-0 z-100 grid place-items-center"
      v-if="isLoading"
    >
      <Spinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Spinner } from "../spinner";

defineProps<{ isLoading: boolean }>();
</script>
