import * as elements from "typed-html";
import { Todo } from "../db/schema";

export function TodoItem({ content, completed, id }: Todo) {
    return (
        <div class="w-80 max-w-sm flex flex-row items-center border border-[#585858] p-2 px-3 my-2 rounded bg-[#282828] gap-2 relative group/item">
            <span
                class="cursor-pointer rounded-full border border-gray-200 w-4 h-4 flex items-center justify-center pt-0.5 group/icon shrink-0"
                role="checkbox"
                hx-post={`/todos/toggle/${id}`}
                hx-swap="outerHTML"
                hx-target="closest div"
            >
                <i
                    class={`fa-solid fa-check fa-2xs ${
                        completed ? "opacity-100 text-green-400" : "opacity-0"
                    } group-hover/icon:opacity-100 transition-opacity duration-300`}
                />
            </span>
            <p>{content}</p>
            <i
                class="fa-solid fa-trash text-red-400 ml-auto cursor-pointer opacity-0 group-hover/item:opacity-100"
                hx-delete={`/todos/${id}`}
                hx-swap="outerHTML"
                hx-target="closest div"
            />
        </div>
    );
}
