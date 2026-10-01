import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore("postsUi", () => {
  const search = ref("");
  const modal = ref(false);
  const id = ref<number | null>(null);

  return {
    search,
    modal,
    id,
  };
});
