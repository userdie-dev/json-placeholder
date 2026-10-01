<template>
  <slot />

  <AlertDialog v-model:open="state.open">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ state.title }}</AlertDialogTitle>

        <AlertDialogDescription>
          {{ state.description }}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Отмена</AlertDialogCancel>

        <AlertDialogAction @click="state.onAccept()">
          Продолжить
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";
import { provide, reactive } from "vue";
import { confirmKey } from "./useConfirm";
import type { ConfirmState } from "./types";

const state = reactive<ConfirmState>({
  open: false,
  title: "",
  description: "",
  onAccept: () => {},
});

provide(confirmKey, state);
</script>
