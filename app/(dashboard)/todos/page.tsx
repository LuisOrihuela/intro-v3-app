import db from "@/utils/db";
import TodoList from "@/components/TodoList";

const getTodos = async () => {
  // added this just to test the loading and error components
  // await new Promise<void>((resolve, reject) =>
  //   setTimeout(() => reject(), 2000)
  // );
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getTodos();
  return <TodoList todos={todos} />;
};

export default TodosPage;
