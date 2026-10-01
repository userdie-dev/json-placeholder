import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const postSchema = z.object({
  //userId: number;
  title: z.string().min(1, "Обязательное поле"),
  body: z.string().min(1, "Обязательное поле"),
  userId: z.number(),
});

export type PostFormValues = z.infer<typeof postSchema>;
export const PostFormSchema = toTypedSchema(postSchema);
