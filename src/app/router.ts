import { createWebHistory, createRouter } from "vue-router";

import PostsPage from "@/models/posts/pages/PostsPage.vue";

const routes = [{ name: "posts", path: "/posts", component: PostsPage }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
