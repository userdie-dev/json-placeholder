export const albumsKeys = {
  list: ["album-list"] as const,
  detail: (id: number) => [...albumsKeys.list, id] as const,
};
