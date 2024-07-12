import React from "react";
import { TodoType } from "../../utilities/interfaces";
import SingleTodo from "../SingleTodo/SingleTodo";

interface TodosListPropType {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}
const TodosList = ({ todos, setTodos }: TodosListPropType) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <>
          <SingleTodo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo?.id}
          />
        </>
      ))}
    </div>
  );
};

export default TodosList;
