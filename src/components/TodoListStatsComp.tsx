import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector/TodoListSelector";

export const TodoListStatsComp = React.memo(() => {
  const todoListStats = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>总数量: {todoListStats.totalNum}</li>
      <li>完成数量: {todoListStats.totalCompletedNum}</li>
      <li>未完成数量: {todoListStats.totalUncompletedNum}</li>
      <li>完成百分比: {Math.round(todoListStats.percentCompleted)}%</li>
    </ul>
  );
});
