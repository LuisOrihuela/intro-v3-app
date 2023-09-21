"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

// this file holds functions that will run in the server (Server actions)

export const createTodo = async (formData: FormData) => {
  const content = formData.get("content");
  if (typeof content === "string") {
    await db.todo.create({ data: { content } });

    revalidatePath("/todos");
  }
};

export const completeTodo = async (todoId: string) => {
  await db.todo.update({
    where: { id: todoId },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
