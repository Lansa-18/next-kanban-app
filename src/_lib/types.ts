/**
 * TypeScript interfaces for the Kanban Task Management Application
 * These interfaces define the data structure used throughout the app
 */

/**
 * Represents a subtask within a main task
 * @interface subTasksObj
 */
export interface subTasksObj {
  id: number;
  title: string;
  taskId: number; // Foreign key reference to parent task
  createdAt: string;
  isCompleted: boolean; // Tracks completion status
}

/**
 * Represents a main task in the kanban board
 * @interface tasksObj
 */
export interface tasksObj {
  id: number;
  title: string;
  status: string; // Current status: "Todo", "Doing", "Done"
  position: number; // Position within the column for ordering
  subtasks: subTasksObj[]; // Array of related subtasks
  columnId: number; // Foreign key reference to parent column
  createdAt: string;
  description: string; // Detailed task description
}

/**
 * Represents a column in the kanban board (Todo, Doing, Done)
 * @interface columnsObj
 */
interface columnsObj {
  id: number;
  name: string; // Column name: "Todo", "Doing", "Done"
  tasks: tasksObj[]; // Array of tasks in this column
  boardId: number; // Foreign key reference to parent board
  position: number; // Position of column in the board
  createdAt: string;
}

/**
 * Represents the complete board data from the database
 * @interface boardDataObj
 */
export interface boardDataObj {
  id: number;
  name: string; // Board name (e.g., "Platform Launch")
  createdAt: string;
  columns: columnsObj[]; // Array of columns containing tasks
}

/**
 * UI-specific interface for rendering column components
 * Used to structure data for the Column component
 * @interface ColumnObjType
 */
export interface ColumnObjType {
  colType: string; // Display name for the column
  color: string; // Hex color for visual distinction
  colData: tasksObj[] | undefined; // Tasks data, may be undefined during loading
}
