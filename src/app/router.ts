import { createWebHistory, createRouter } from "vue-router";

import PostsPage from "@/models/posts/pages/PostsPage.vue";
import TodosPage from "@/models/todos/pages/TodosPage.vue";

const routes = [
  { name: "posts", path: "/posts", component: PostsPage },
  { name: "todos", path: "/todos", component: TodosPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
