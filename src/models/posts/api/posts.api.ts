import api from "@/app/api";
import type { PostDto, PostPayloadDto, PostsListDto } from "./posts.dto";

export const postsApi = {
  list: () => api.get<PostsListDto>("posts"),
  get: (id: number) => api.get<PostDto>(`posts/${id}`),
  create: (p: PostPayloadDto) => api.post<PostDto>("posts", p),
  update: (p: PostDto) => api.put<PostDto>(`posts/${p.id}`, p),
  delete: (id: number) => api.delete<{}>(`posts/${id}`),
};
