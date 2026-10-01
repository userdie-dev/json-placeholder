export interface PostDto {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type PostsListDto = PostDto[];

export type PostPayloadDto = Omit<PostDto, "id">;
