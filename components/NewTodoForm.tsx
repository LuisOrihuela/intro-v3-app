import { createTodo } from "@/utils/actions";
type Props = {};

const NewTodoForm = (props: Props) => {
  return (
    <div>
      <form action={createTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button>Create todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
