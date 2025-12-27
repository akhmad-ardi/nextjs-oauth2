import { z } from "zod";

export const RegistrationSchema = z.object({
  email: z.email().nonempty(),
  name: z.string().nonempty(),
  password: z.string().min(8).nonempty(),
  confirm_password: z.string().min(8).nonempty(),
}).refine((data) => data.password === data.confirm_password, {
  path: ["confirm_password"],
});
export type TypeRegistrationSchema = z.infer<typeof RegistrationSchema>;