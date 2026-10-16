export const commentsKeys = {
  list: ["comment-list"] as const,
  detail: (id: number) => [...commentsKeys.list, id] as const,
};
