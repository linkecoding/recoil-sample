export interface TodoItemModel {
  id: number;
  text: string;
  isComplete: boolean;
}

export type FilterEnum = "showAll" | "showCompleted" | "showUnCompleted";
