export const postsKeys = {
  list: ["post-list"] as const,
  detail: (id: number) => [...postsKeys.list, id] as const,
};
