import { z } from 'zod';
import { formSchema } from './add/schema';

export const fbDataSchema = formSchema.extend({
	id: z.string(),
	createdBy: z.string(),
	createdAt: z.date(),
	searchTerms: z.string().optional()
});
export type FbDataSchema = z.infer<typeof fbDataSchema>;
