import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(4),
	orgName: z.string(),
	addressLine1: z.string().min(5),
	addressLine2: z.string(),
	country: z.string().min(3),
	pincode: z.string(),
	phonePrefix: z.coerce.number().default(91),
	phone: z.coerce.number(),
	email: z.string().email(),
	description: z.string().min(50),
	imageUrls: z.array(z.string().url()).min(1).default([''])
});

export type FormSchema = typeof formSchema;
