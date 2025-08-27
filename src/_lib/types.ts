/**
 * TypeScript interfaces for the Kanban Task Management Application
 * These interfaces define the data structure used throughout the app
 */

export interface subTasksObj {
  id: number;
  title: string;
  taskId: number;
  createdAt: string;
  is_completed: boolean;
}

export interface tasksObj {
  id: number;
  title: string;
  status: string; // Current status: "Todo", "Doing", "Done"
  position: number;
  subtasks: subTasksObj[];
  columnId: number;
  createdAt: string;
  description: string;
}

interface columnsObj {
  id: number;
  name: string; // Column name: "Todo", "Doing", "Done"
  tasks: tasksObj[];
  boardId: number;
  position: number;
  createdAt: string;
}

export interface boardDataObj {
  id: number;
  name: string;
  createdAt: string;
  columns: columnsObj[];
}

export interface ColumnObjType {
  colType: string;
  color: string;
  colData: tasksObj[] | undefined;
}
