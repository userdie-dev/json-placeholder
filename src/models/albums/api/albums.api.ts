import api from "@/app/api";
import type { AlbumDto, AlbumPayloadDto, AlbumListDto } from "./albums.dto";

export const albumsApi = {
  list: () => api.get<AlbumListDto>("albums"),
  get: (id: number) => api.get<AlbumDto>(`albums/${id}`),
  create: (p: AlbumPayloadDto) => api.post<AlbumDto>("albums", p),
  update: (p: AlbumDto) => api.put<AlbumDto>(`albums/${p.id}`, p),
  delete: (id: number) => api.delete<{}>(`albums/${id}`),
};
