import { connect } from 'http2';
import type (Config) from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL is not set');
}

export default {
    schema: './src/app/lib/supabase/schema.ts',
    dialect: 'postgresql',
    out: './migrations', 
    dbCredentials: { 
        url: process.env.DATABASE_URL || '',
    }
} satisfies Config;
