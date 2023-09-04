import { InferModel, relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sections = sqliteTable("sections", {
    id: integer("id", { mode: "number" }).primaryKey({
        autoIncrement: true,
    }),
    name: text("content").notNull(),
    expanded: integer("completed", { mode: "boolean" })
        .notNull()
        .default(false),
});

export const sectionsRelations = relations(sections, ({ many }) => ({
    todos: many(todos),
}));

export const todos = sqliteTable("todos", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    content: text("content").notNull(),
    completed: integer("completed", { mode: "boolean" })
        .notNull()
        .default(false),
    sectionId: integer("sectionId", { mode: "number" }),
});

export const todosRelations = relations(todos, ({ one }) => ({
    section: one(sections, {
        fields: [todos.sectionId],
        references: [sections.id],
    }),
}));

// export const users = pgTable('users', {
// 	id: serial('id').primaryKey(),
// 	name: text('name'),
// });

// export const usersRelations = relations(users, ({ many }) => ({
// 	posts: many(posts),
// }));

// export const posts = pgTable('posts', {
// 	id: serial('id').primaryKey(),
// 	content: text('content'),
// 	authorId: integer('author_id'),
// });

// export const postsRelations = relations(posts, ({ one }) => ({
// 	author: one(users, {
// 		fields: [posts.authorId],
// 		references: [users.id],
// 	}),
// }));

//sectionId (primaryKey)
//name
//expanded

export type Todo = InferModel<typeof todos>;
