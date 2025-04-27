import { z } from "zod";

export const createFormSchema = (t) => {
  return z.object({
    name: z
      .string()
      .min(3, { message: t("nameInputErrorMin") })
      .max(50, { message: t("nameInputErrorMax") }),
    senderEmail: z.string().email({ message: t("emailInputError") }),
    message: z
      .string()
      .min(10, { message: t("messageInputErrorMin") })
      .max(500, { message: t("messageInputErrorMax") }),
  });
};
