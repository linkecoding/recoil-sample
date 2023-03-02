import React, { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom/TodoListAtom";
import { Ids } from "../utils/Ids";

export const TodoItemCreatorComp = React.memo(() => {
  const setTodoList = useSetRecoilState(todoListState);
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = useCallback((event: { target: { value: string } }) => {
    setInputValue(event.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: Ids.getId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });
    setInputValue("");
  }, [inputValue, setTodoList]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={onClickAdd}>添加</button>
    </div>
  );
});

