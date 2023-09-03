import * as elements from "typed-html";
import { Todo } from "../db/schema";

export function TodoItem({ content, completed, id }: Todo) {
    return (
        <div class="flex flex-row  border border-[#585858] p-2 px-3 my-2 rounded bg-[#282828] gap-2">
            <input
                type="checkbox"
                class="cursor-pointer"
                checked={completed}
                hx-post={`/todos/toggle/${id}`}
                hx-swap="outerHTML"
                hx-target="closest div"
            />
            <p>{content}</p>
            <button
                class="text-red-500 ml-auto cursor-pointer"
                hx-delete={`/todos/${id}`}
                hx-swap="outerHTML"
                hx-target="closest div"
            >
                X
            </button>
        </div>
    );
}
