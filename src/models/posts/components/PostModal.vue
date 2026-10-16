<template>
  <Dialog>
    <DialogContent :showCloseButton="false" @openAutoFocus.prevent="">
      <LoadingOverlay :isLoading="isLoadingModal">
        <form @submit.prevent="onSubmit">
          <DialogHeader>
            <div class="flex items-center justify-between mb-4">
              <DialogTitle>Пост</DialogTitle>

              <Button
                v-if="id"
                type="button"
                :variant="'destructive'"
                @click="onDelete"
              >
                Удалить
              </Button>
            </div>

            <Field>
              <FieldLabel htmlFor="fieldgroup-title">Название</FieldLabel>

              <Input
                v-model="title"
                v-bind="titleAttrs"
                id="fieldgroup-title"
                placeholder="Jordan Lee"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-body">Описание</FieldLabel>

              <Textarea
                v-model="body"
                v-bind="bodyAttrs"
                id="fieldgroup-body"
                placeholder="Jordan Lee"
                class="h-50"
              />
            </Field>
          </DialogHeader>

          <DialogFooter class="mt-4">
            <DialogClose>
              <Button type="button" :variant="'secondary'">Закрыть</Button>
            </DialogClose>

            <Button type="submit">Сохранить</Button>
          </DialogFooter>
        </form>
      </LoadingOverlay>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/shared/ui/dialog";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useGetPost } from "../queries/useGetPost";
import { usePostForm } from "../composables/usePostForm";
import { computed, toRef } from "vue";
import { useDeletePost } from "../queries/useDeletePost";
import { useSavePost } from "../queries/useSaveForm";
import { useConfirm } from "@/shared/composable/useConfirm/useConfirm";
import { LoadingOverlay } from "@/shared/ui/loadingOverlay";

const props = defineProps<{ id: number | null }>();

const id = toRef(props, "id");

const { data, isLoading } = useGetPost(id);

const { handleSubmit, defineField } = usePostForm(data);

const [title, titleAttrs] = defineField("title");
const [body, bodyAttrs] = defineField("body");

const save = useSavePost(id);
const deletePost = useDeletePost(id);

const isLoadingModal = computed(
  () => isLoading.value || save.isPending.value || deletePost.isPending.value,
);

const onSubmit = handleSubmit((values) => {
  openConfirm({
    title: "Сохранение поста",
    description: "Вы действительно хотите сохранить пост ?",
    onAccept: () => save.mutate(values),
  });
});

const { openConfirm } = useConfirm();

const onDelete = () => {
  openConfirm({
    title: "Удаление поста",
    description: "Вы действительно хотите удалить пост ?",
    onAccept: () => deletePost.mutate(),
  });
};
</script>
