import * as elements from "typed-html";
import { Todo } from "../db/schema";

export function TodoItem({ content, completed, id }: Todo) {
    return (
        <div class="flex flex-row items-center border border-[#585858] p-2 px-3 my-2 rounded bg-[#282828] gap-2">
            <span
                class="cursor-pointer rounded-full border border-gray-200 w-4 h-4 flex items-center justify-center pt-0.5 group"
                role="checkbox"
                hx-post={`/todos/toggle/${id}`}
                hx-swap="outerHTML"
                hx-target="closest div"
            >
                <i
                    class={`fa-solid fa-check fa-2xs ${
                        completed ? "opacity-100 text-green-400" : "opacity-0"
                    } group-hover:opacity-100 transition-opacity duration-300`}
                />
            </span>

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
