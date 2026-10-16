<template>
  <Sidebar
    collapsible="icon"
    class="md:left-[max(0px,calc((100vw-80rem)/2))] md:top-4 md:bottom-auto md:h-auto md:max-h-[calc(100svh-2rem)] md:overflow-hidden md:rounded-xl md:border"
  >
    <SidebarHeader>
      <div class="flex items-center gap-2 px-2 py-1 font-semibold">
        <Braces class="size-5 shrink-0" />
        <span class="truncate group-data-[collapsible=icon]:hidden"
          >JSON Placeholder</span
        >
      </div>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.to">
              <SidebarMenuButton
                as-child
                :tooltip="item.title"
                :is-active="route.path.startsWith(item.to)"
              >
                <RouterLink :to="item.to">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import { Braces, FileText, CircleCheckBig, Images } from "@lucide/vue";
import { useRoute } from "vue-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../sidebar";

const route = useRoute();

const items = [
  { title: "Посты", to: "/posts", icon: FileText },
  { title: "Задачи", to: "/todos", icon: CircleCheckBig },
  { title: "Альбомы", to: "/albums", icon: Images },
];
</script>
