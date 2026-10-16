export interface CommentDto {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type CommentListDto = CommentDto[];

export type CommentPayloadDto = Omit<CommentDto, "id">;
