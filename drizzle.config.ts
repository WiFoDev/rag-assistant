import { defineConfig } from 'drizzle-kit';

import { DB_URL } from 'env';
export default defineConfig({
  schema: './src/server/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: DB_URL,
  },
  verbose: true,
  strict: true,
});
