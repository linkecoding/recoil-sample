import React, { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom/TodoListAtom";
import { TodoItemModel } from "../model/model";
import { TodoListFiltersComp } from "./TodoListFiltersComp";

export interface TodoItemCompProps {
  item: TodoItemModel;
}

const replaceItemAtIndex = (
  list: TodoItemModel[],
  index: number,
  newValue: TodoItemModel
) => {
  return [...list.slice(0, index), newValue, ...list.slice(index + 1)];
};

const removeItemAtIndex = (list: TodoItemModel[], index: number) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

export const TodoItemComp: React.FC<TodoItemCompProps> = React.memo(
  ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = useMemo(() => {
      return todoList.findIndex((todoItem) => todoItem === item);
    }, [todoList, item]);

    const editItemText = useCallback(
      (event: { target: { value: string } }) => {
        const newTodoList = replaceItemAtIndex(todoList, index, {
          ...item,
          text: event.target.value,
        });
        setTodoList(newTodoList);
      },
      [todoList, index, item, setTodoList]
    );

    const toggleItemCompletion = useCallback(() => {
      const newTodoList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
      setTodoList(newTodoList);
    }, [todoList, index, item, setTodoList]);

    const onClickDelete = useCallback(() => {
      const newTodoList = removeItemAtIndex(todoList, index);
      setTodoList(newTodoList);
    }, [todoList, index, setTodoList]);

    return (
      <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={onClickDelete}>删除</button>
      </div>
    );
  }
);
