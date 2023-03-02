import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selector/TodoListSelector";
import { TodoItemComp } from "./TodoItemComp";
import { TodoItemCreatorComp } from "./TodoItemCreatorComp";
import { TodoListFiltersComp } from "./TodoListFiltersComp";
import { TodoListStatsComp } from "./TodoListStatsComp";

export const TodoListComp = React.memo(() => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStatsComp />
      <TodoListFiltersComp />
      <TodoItemCreatorComp />
      {todoList.map((todoItem) => {
        return <TodoItemComp key={todoItem.id} item={todoItem} />;
      })}
    </>
  );
});
