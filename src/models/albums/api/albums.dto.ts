export interface AlbumDto {
  id: number;
  userId: number;
  title: string;
}

export type AlbumListDto = AlbumDto[];

export type AlbumPayloadDto = Omit<AlbumDto, "id">;
