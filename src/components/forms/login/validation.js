import { z } from "zod"

export const formSchema = z.object({
    emailOrMobile: z.string().min(2).max(50),
    password: z.string().min(6, { message: 'Password should be greater than 5' }).max(50),
    deviceType: z.string().min(2).max(50),
})