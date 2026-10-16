import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlbumsStore = defineStore("Albums", () => {
  const search = ref("");

  return {
    search,
  };
});
