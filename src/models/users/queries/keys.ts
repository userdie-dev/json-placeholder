export const usersKeys = {
  list: ["user-list"] as const,
  detail: (id: number) => [...usersKeys.list, id] as const,
};
