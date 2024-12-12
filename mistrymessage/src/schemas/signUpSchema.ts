import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3,"User name must be atleast two characters")
    .max(11,"User must be no more then 11 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string()
        .email({message:"Invalid email address"}),
    password:z.string()
        .min(6,{message:"Password must be at least 6 characters"})
        .max(10,{message:"Password must be less then 10 characters"})
})
