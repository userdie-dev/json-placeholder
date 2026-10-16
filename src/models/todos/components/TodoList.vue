<template>
  <Todo v-for="todo in todos" :todo :key="todo.id" />
</template>

<script setup lang="ts">
import type { TodoListDto } from "../api/todos.dto";
import Todo from "./Todo.vue";

defineProps<{
  todos: TodoListDto;
}>();
</script>
