import React, { useState } from "react";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoType } from "../../utilities/interfaces";
import "./../../App.css";

interface SgTodoPropType {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todo: TodoType;
}

const SingleTodo: React.FC<SgTodoPropType> = ({ todos, setTodos, todo }) => {
  console.log(todos);
  // handleEditTodo
  /**
   * click edit icon enable edit mode
   * generate a input field for editing
   * update todos by setTodos onSubmit
   */
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo?.task);
  const handleSubmitEditTodo = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editedTodo } : todo
      )
    );
    setEdit(false);
  };

  //handleDeleteTodo
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo?.id !== id));
  };

  //handleDone
  const handleTodoDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo?.id === id ? { ...todo, isDone: !todo?.isDone } : todo
      )
    );
  };
  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleSubmitEditTodo(e, todo?.id)}
    >
      {edit ? (
        <input
          type="text"
          value={editedTodo}
          className="todos__single--text"
          onChange={(e) => {
            setEditedTodo(e.target.value);
          }}
        />
      ) : (
        <>
          {todo?.isDone ? (
            <s className={`todos__single--text`}>{todo?.task}</s>
          ) : (
            <span className={`todos__single--text`}>{todo?.task}</span>
          )}
        </>
      )}
      <div>
        <span className="icon" onClick={()=>setEdit(!edit)}>
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => handleDeleteTodo(todo?.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleTodoDone(todo?.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
