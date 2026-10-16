<template>
  <SidebarProvider>
    <AppSidebar />

    <main class="h-dvh min-w-0 flex-1 bg-background text-foreground">
      <div class="container mx-auto flex h-full flex-col gap-2 px-4 py-4">
        <SidebarTrigger class="md:hidden" />
        <div class="min-h-0 flex-1">
          <slot />
        </div>
      </div>
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "../sidebar";
import AppSidebar from "./AppSidebar.vue";
</script>
