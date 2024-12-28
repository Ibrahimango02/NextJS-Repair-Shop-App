import { db } from '@/db'
import { tickets } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getTicket(id: number) {
    const ticket = await db.select()      // returns an array
        .from(tickets)
        .where(eq(tickets.id, id))

    return ticket[0]
}