<template>
  <Toaster />

  <ConfirmProvider>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </ConfirmProvider>
</template>

<script setup lang="ts">
import DefaultLayout from "@/shared/ui/Layouts/DefaultLayout.vue";

import "vue-sonner/style.css";
import { Toaster } from "@/shared/ui/sonner";
import ConfirmProvider from "@/shared/composable/useConfirm/ConfirmProvider.vue";
</script>
