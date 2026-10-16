<template>
  <Card>
    <p>
      <span>{{ todo.title }}</span>

      <span>-</span>

      <span>{{ todo.userId }}</span>
    </p>
  </Card>
</template>

<script setup lang="ts">
import { Checkbox } from "@/shared/ui/checkbox";
import type { TodoDto } from "../api/todos.dto";
import { Card } from "@/shared/ui/card";

defineProps<{
  todo: TodoDto;
}>();
</script>
