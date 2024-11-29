import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"Must be no more then characters")
    .regex(/^[a-zA-Z0-9_]+$/, "USername must not contain special character")


export  const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message:"Invalid email address"}),
    password : z.string().min(6,{message:"Password must be atleast six characters"}).max(10)
})  