import api from "@/app/api";
import type { PhotoListDto } from "./photos.dto";

export const photosApi = {
  list: () => api.get<PhotoListDto>("photos"),
};
