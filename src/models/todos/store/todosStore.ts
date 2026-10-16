import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("Todos", () => {
  const search = ref("");
  const modal = ref(false);
  const id = ref<number | null>(null);

  return {
    search,
    modal,
    id,
  };
});
