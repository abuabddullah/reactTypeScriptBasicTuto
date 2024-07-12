import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TodosList from "./components/TodosList/TodosList";
import { TodoType } from "./utilities/interfaces";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  //handleTodoFormSubmit
  const handleTodoFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: String(Date.now()), task: todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Task Define</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleTodoFormSubmit={handleTodoFormSubmit}
      />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
