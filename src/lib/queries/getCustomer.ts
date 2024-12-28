import { db } from '@/db'
import { customers } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getCustomer(id: number) {
    const customer = await db.select()      // returns an array
        .from(customers)
        .where(eq(customers.id, id))

    return customer[0]
}