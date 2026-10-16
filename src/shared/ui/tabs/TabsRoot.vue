<template>
  <Tabs :default-value="tabs[0].id">
    <TabsList>
      <TabsTrigger v-for="tab in tabs" :key="tab.id" :value="tab.id">
        {{ tab.title }}
      </TabsTrigger>
    </TabsList>

    <TabsContent v-for="tab in tabs" :key="tab.id" :value="tab.id">
      <component :is="tab.content" v-bind="tab.props" />
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";
import type { TabList } from "./tabs.types";

defineProps<{
  tabs: TabList;
}>();
</script>
