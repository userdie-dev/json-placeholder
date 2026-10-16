import { useQuery } from "@tanstack/vue-query";
import { commentApi } from "../api/commentsapi";
import { commentsKeys } from "./keys";
import type { CommentDto } from "../api/comments.dto";
import type { Comment } from "../model/comments.types";
import { AVATARS } from "@/shared/constants/avatars";
import { sample } from "lodash-es";

export const useCommentList = () =>
  useQuery({
    queryKey: commentsKeys.list,
    queryFn: commentApi.list,
    select: (data: CommentDto[]): Comment[] => {
      return data.map((t) => ({
        ...t,
        avatar: sample(AVATARS) ?? "",
      }));
    },
  });
