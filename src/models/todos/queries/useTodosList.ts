import { useQuery } from "@tanstack/vue-query";
import { todosApi } from "../api/todos.api";
import { todosKeys } from "./keys";

export const useTodosList = () =>
  useQuery({
    queryKey: todosKeys.list,
    queryFn: todosApi.list,
    //select:
  });
