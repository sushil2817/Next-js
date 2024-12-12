import {z} from 'zod';

export const acceptMessgaeSchema = z.object({
    acceptMessage:z.boolean(),
})