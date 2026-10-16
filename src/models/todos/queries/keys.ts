export const todosKeys = {
  list: ["todo-list"] as const,
  detail: (id: number) => [...todosKeys.list, id] as const,
};
