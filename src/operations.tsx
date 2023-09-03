import { eq } from "drizzle-orm";
import * as elements from "typed-html";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { db } from "./db";
import { todos } from "./db/schema";

type ParamsWithID = {
    params: {
        id: number;
    };
};

type ParamsWithBodyContent = {
    body: {
        content: string;
    };
};

export const getAllTodos = async () => {
    const data = await db.select().from(todos).all();
    return <TodoList todos={data} />;
};

export const updateTodoItem = async ({ params }: ParamsWithID) => {
    const oldTodo = await db
        .select()
        .from(todos)
        .where(eq(todos.id, params.id))
        .get();
    const newTodo = await db
        .update(todos)
        .set({ completed: !oldTodo.completed })
        .where(eq(todos.id, params.id))
        .returning()
        .get();
    return <TodoItem {...newTodo} />;
};

export const deleteTodoItem = async ({ params }: ParamsWithID) => {
    await db.delete(todos).where(eq(todos.id, params.id)).run();
};

export const createNewTodo = async ({ body }: ParamsWithBodyContent) => {
    const newTodo = await db.insert(todos).values(body).returning().get();
    return <TodoItem {...newTodo} />;
};
