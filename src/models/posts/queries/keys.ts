export const postsKeys = {
  list: ["list"] as const,
  detail: (id: number) => [...postsKeys.list, id] as const,
};
