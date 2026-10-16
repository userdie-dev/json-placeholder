import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const commentSchema = z.object({
  email: z.string().min(1, "Обязательное поле").email("Некорректный email"),
  body: z.string().trim().min(1, "Обязательное поле"),
});

export type CommentFormValues = z.infer<typeof commentSchema>;
export const CommentFormSchema = toTypedSchema(commentSchema);
