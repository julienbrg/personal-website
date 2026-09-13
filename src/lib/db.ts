import postgres from 'postgres'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Add it to .env (see .env.template).')
}

export const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'verify-full',
  max: 3,
  idle_timeout: 20,
  connect_timeout: 10,
})
