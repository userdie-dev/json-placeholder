import { useQuery } from "@tanstack/vue-query";
import { albumsApi } from "../api/albums.api";
import { albumsKeys } from "./keys";

export const useAlbumsList = () =>
  useQuery({
    queryKey: albumsKeys.list,
    queryFn: albumsApi.list,
    //select:
  });
