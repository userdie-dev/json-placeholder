import api from "@/app/api";
import type {
  CommentDto,
  CommentPayloadDto,
  CommentListDto,
} from "./comments.dto";

export const commentApi = {
  list: () => api.get<CommentListDto>("comments"),
  get: (id: number) => api.get<CommentDto>(`comments/${id}`),
  create: (p: CommentPayloadDto) => api.post<CommentDto>("comments", p),
  update: (p: CommentDto) => api.put<CommentDto>(`comments/${p.id}`, p),
  delete: (id: number) => api.delete<{}>(`comments/${id}`),
};
