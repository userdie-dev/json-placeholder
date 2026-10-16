import { useQuery } from "@tanstack/vue-query";
import { photosApi } from "../api/photos.api";
import { photosKeys } from "./keys";

export const usePhotosList = () =>
  useQuery({
    queryKey: photosKeys.list,
    queryFn: photosApi.list,
  });
