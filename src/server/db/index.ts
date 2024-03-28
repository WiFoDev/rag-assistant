import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { DB_URL } from 'env';

import * as schema from './schema';

const queryClient = postgres(DB_URL);
const db = drizzle(queryClient, {
  schema,
});

export { db };
