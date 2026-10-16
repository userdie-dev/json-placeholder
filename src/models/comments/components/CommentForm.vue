<template>
  <form class="flex gap-3" @submit.prevent="onSubmit">
    <Avatar class="mt-0.5 shrink-0">
      <AvatarFallback>{{ initials }}</AvatarFallback>
    </Avatar>

    <div class="min-w-0 flex-1 rounded-2xl border px-4 py-3 flex flex-col gap-3">
      <Field>
        <FieldLabel :htmlFor="`comment-email-${postId}`">Email</FieldLabel>
        <Input
          v-model="email"
          v-bind="emailAttrs"
          :id="`comment-email-${postId}`"
          placeholder="user@example.com"
        />
        <FieldError v-if="errors.email">{{ errors.email }}</FieldError>
      </Field>

      <Field>
        <FieldLabel :htmlFor="`comment-body-${postId}`">Комментарий</FieldLabel>
        <Textarea
          v-model="body"
          v-bind="bodyAttrs"
          :id="`comment-body-${postId}`"
          placeholder="Напишите комментарий"
        />
        <FieldError v-if="errors.body">{{ errors.body }}</FieldError>
      </Field>

      <div class="flex justify-end">
        <Button type="submit" :disabled="create.isPending.value">
          Отправить
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useForm } from "vee-validate";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import {
  CommentFormSchema,
  type CommentFormValues,
} from "../model/comment.schema";
import { useCreateComment } from "../queries/useCreateComment";

const props = defineProps<{ postId: number }>();

const { handleSubmit, defineField, errors, resetForm } =
  useForm<CommentFormValues>({
    validationSchema: CommentFormSchema,
    initialValues: { email: "", body: "" },
  });

const [email, emailAttrs] = defineField("email");
const [body, bodyAttrs] = defineField("body");

const create = useCreateComment(props.postId);

const initials = computed(() => (email.value ?? "").slice(0, 2).toUpperCase() || "?");

const onSubmit = handleSubmit((values) =>
  create.mutate(values, { onSuccess: () => resetForm() }),
);
</script>
