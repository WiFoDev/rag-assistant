import { z } from 'zod';

export const ExampleSchema = z.object({
  name: z.string(),
});

export type ExampleDTO = z.infer<typeof ExampleSchema>;
