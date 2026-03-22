import classes from "./NewTodo.module.css";
import React, { useContext } from "react";
import { useRef } from "react";
import { TodosContext } from "../store/todos.context";

export const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todosCTX = useContext(TodosContext);

  const submitHandller = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCTX.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandller}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

//onAddTodo is a function we define the type on the above in generic types.
