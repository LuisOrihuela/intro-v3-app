import { TodoType } from "@/types";
import Todo from "./Todo";

type Props = {
  todos: TodoType[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
