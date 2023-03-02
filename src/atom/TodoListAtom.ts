import { atom } from "recoil";
import { FilterEnum, TodoItemModel } from "../model/model";

export const todoListState = atom<TodoItemModel[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<FilterEnum>({
  key: "todoListFilterState",
  default: "showAll",
});