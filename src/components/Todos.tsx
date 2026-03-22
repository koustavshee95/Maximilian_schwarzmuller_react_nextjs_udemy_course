import clasess from "./Todos.module.css";
import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";
import { TodosContext } from "../store/todos.context";

export const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={clasess.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

//here we use React.Fc for generic type <> with angle brackets and add props(items) as an object.
