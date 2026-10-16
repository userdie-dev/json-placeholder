import api from "@/app/api";
import type { UserDto, UserPayloadDto, UserListDto } from "./users.dto";

export const usersApi = {
  list: () => api.get<UserListDto>("users"),
  get: (id: number) => api.get<UserDto>(`users/${id}`),
  create: (p: UserPayloadDto) => api.post<UserDto>("users", p),
  update: (p: UserDto) => api.put<UserDto>(`users/${p.id}`, p),
  delete: (id: number) => api.delete<{}>(`users/${id}`),
};
