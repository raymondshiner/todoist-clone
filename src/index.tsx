import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import * as elements from "typed-html";
import {
    createNewTodo,
    deleteTodoItem,
    getAllTodos,
    updateTodoItem,
} from "./operations";

const idParams = {
    params: t.Object({
        id: t.Numeric(),
    }),
};

const bodyParams = {
    body: t.Object({
        content: t.String({ minLength: 1 }),
    }),
};

const app = new Elysia()
    .use(html())
    .get("/", ({ html }) =>
        html(
            <BaseHtml>
                <body
                    class="flex w-full h-screen justify-center items-center bg-[#1E1E1E] text-white"
                    hx-get="/todos"
                    hx-swap="innerHTML"
                    hx-trigger="load"
                />
            </BaseHtml>
        )
    )
    .get("/todos", getAllTodos)
    .post("/todos/toggle/:id", updateTodoItem, idParams)
    .delete("/todos/:id", deleteTodoItem, idParams)
    .post("/todos", createNewTodo, bodyParams)
    .listen({ port: 3000 });

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todoist Clone</title>
  <link rel="icon" href="https://d3ptyyxy2at9ui.cloudfront.net/favicon-a85885.ico">  
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script src="https://kit.fontawesome.com/a54e17b247.js" crossorigin="anonymous"></script>
</head>

${children}
`;
