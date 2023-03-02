import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom/TodoListAtom";
import { FilterEnum } from "../model/model";

export const TodoListFiltersComp = React.memo(() => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = useCallback(
    (event: { target: { value: string } }) => {
      setFilter(event.target.value as FilterEnum);
    },
    [setFilter]
  );
  return (
    <select value={filter} onChange={updateFilter}>
      <option value="showAll">展示全部</option>
      <option value="showCompleted">展示已完成</option>
      <option value="showUnCompleted">展示未完成</option>
    </select>
  );
});
