import { drizzle } from "drizzle-orm/neon-http"
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'

if (process.env.NODE_ENV === "development") {
    config({ path: ".env.local" })  // pretty much says to look for .env.local instead of .env
}

const sql = neon(process.env.DATABASE_URL!)

// logger
// const db = drizzle(sql, { logger: true })

const db = drizzle(sql)

export { db } 