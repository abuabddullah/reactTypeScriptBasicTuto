import React, { useRef } from "react";

interface InpFldPropType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTodoFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<InpFldPropType> = ({
  todo,
  setTodo,
  handleTodoFormSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // handleTodoChange
  const handleSetTodoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <form
      className="input"
      // onSubmit={handleTodoFormSubmit} // শুধুমাত্র এটুকু থাকলে enter press এও input box টা focus mode এ থাকত
      onSubmit={(e) => {
        handleTodoFormSubmit(e);
        inputRef.current?.blur(); // useRef ব্যবহার করে enter press এও input box টা focus mode disable করা হয়েছে
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Define your task..."
        className="input__box"
        value={todo}
        name="input4task"
        onChange={handleSetTodoOnChange}
      />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
