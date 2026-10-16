import type { CommentDto } from "../api/comments.dto";

export interface Comment extends CommentDto {
  avatar: string;
}
