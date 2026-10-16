import { computed, toValue, type MaybeRefOrGetter, type Ref } from "vue";

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export const useSearch = <T>(
  search: Ref<string>,
  data: MaybeRefOrGetter<T[] | undefined>,
  key: StringKeys<T>,
) => {
  const filtered = computed(() => {
    const q = search.value.toLocaleLowerCase();

    return (toValue(data) ?? []).filter((el) =>
      (el[key] as string).toLowerCase().includes(q),
    );
  });

  return filtered;
};
