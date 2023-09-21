"use client";
import { TodoType } from "@/types";
import { useTransition } from "react";
import { completeTodo } from "@/utils/actions";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      completeTodo(todo.id);
    });
  };

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed && "line-through text-gray-900"
      }`}
      onClick={handleClick}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
