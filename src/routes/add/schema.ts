import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(4, { message: 'Name must be atleast 4 characters' }),
	orgName: z.string(),
	addressLine1: z.string().min(5, { message: 'Address should be atleast 5 characters' }),
	addressLine2: z.string(),
	country: z.string().min(3, { message: 'Country should be atleast 3 characters' }),
	pincode: z.string(),
	phonePrefix: z.coerce.number().default(91),
	phone: z.string().min(8, { message: 'Phone no. should be atleast 8 characters' }),
	email: z.string().email(),
	description: z.string().min(50, { message: 'Description should be atleast 50 characters' }),
	imageUrls: z
		.array(z.string().url({ message: 'Invalid URL format' }))
		.min(1, { message: 'Atleast one image is required' })
		.default([''])
});

export type FormSchema = typeof formSchema;
