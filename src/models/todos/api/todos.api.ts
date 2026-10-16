import api from "@/app/api";
import type { TodoDto, TodoPayloadDto, TodoListDto } from "./todos.dto";

export const todosApi = {
  list: () => api.get<TodoListDto>("todos"),
  get: (id: number) => api.get<TodoDto>(`todos/${id}`),
  create: (p: TodoPayloadDto) => api.post<TodoDto>("todos", p),
  update: (p: TodoDto) => api.put<TodoDto>(`todos/${p.id}`, p),
  delete: (id: number) => api.delete<{}>(`todos/${id}`),
};
