import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string().min(2).max(50).min(3),
    password: z.string().min(6, { message: 'Password should be greater than 5' }).max(50),
    lastName: z.string().min(2).max(50).min(3),
    phoneNumber: z.string().length(10, { message: "Please enter a valid phone number" }),
    confirmPassword: z.string().min(6, { message: 'Password should be greater than 5' }).max(50),
    email: z.string().email({ message: 'Please enter a valid email' }),
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        })
    }
})