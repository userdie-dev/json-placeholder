import { createWebHistory, createRouter } from "vue-router";

import PostsPage from "@/models/posts/pages/PostsPage.vue";
import TodosPage from "@/models/todos/pages/TodosPage.vue";
import AlbumsPage from "@/models/albums/pages/AlbumsPage.vue";

const routes = [
  { name: "posts", path: "/posts", component: PostsPage },
  { name: "todos", path: "/todos", component: TodosPage },
  { name: "albums", path: "/albums", component: AlbumsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
