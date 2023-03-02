import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../atom/TodoListAtom";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todoList = get(todoListState);
    switch (filter) {
      case "showAll": {
        return todoList;
      }
      case "showCompleted": {
        return todoList.filter((todoItem) => todoItem.isComplete);
      }
      case "showUnCompleted": {
        return todoList.filter((todoItem) => !todoItem.isComplete);
      }
      default:
        return todoList;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (todoItem) => todoItem.isComplete
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
