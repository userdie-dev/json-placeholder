<template>
  <div class="h-full grid gap-4 content-start">
    <div class="flex gap-4 justify-between">
      <Input v-model="search" placeholder="Поиск" class="max-w-150" />

      <Button @click="openModal(null)">Добавить задачу</Button>
    </div>

    <LoadingBlock v-if="isLoading" />

    <TabsRoot v-else :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { LoadingBlock } from "@/shared/ui/loadingOverlay";
import { TabsRoot } from "@/shared/ui/tabs";
import type { TabList } from "@/shared/ui/tabs/tabs.types";
import { useTodosList } from "../queries/useTodosList.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useTodosStore } from "../store/todosStore.ts";
import type { TodoDto } from "../api/todos.dto.ts";
import { useSearch } from "@/shared/composable/useSearch/useSearch.ts";
import TodoList from "../components/TodoList.vue";

const { data, isLoading } = useTodosList();

const { search, modal, id } = storeToRefs(useTodosStore());

const filtered = useSearch<TodoDto>(search, data, "title");

const openModal = (i: number | null) => {
  modal.value = true;
  id.value = i;
};

const tabs = computed<TabList>(() => [
  {
    id: 1,
    title: "Активные",
    content: TodoList,
    props: { todos: filtered.value.filter((t) => !t.completed) },
  },
  {
    id: 2,
    title: "Завершённые",
    content: TodoList,
    props: { todos: filtered.value.filter((t) => t.completed) },
  },
]);
</script>
