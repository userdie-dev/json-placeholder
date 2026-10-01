import { MutationCache, QueryCache, QueryClient } from "@tanstack/vue-query";

const queryCache = new QueryCache();

const mutationCache = new MutationCache();

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: 5 * 60_000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
    },
  },
});
