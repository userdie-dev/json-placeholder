export interface PhotoDto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type PhotoListDto = PhotoDto[];
