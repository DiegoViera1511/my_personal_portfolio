import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    name: varchar('name', { length: 255 }).unique().primaryKey().notNull(),
    password: varchar('password', { length: 255 }).notNull(),
})