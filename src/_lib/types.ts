interface subTasksObj {
  id: number;
  title: string;
  taskId: number;
  createdAt: string;
  isCompleted: boolean;
}

interface tasksObj {
  id: number;
  title: string;
  status: string;
  position: number;
  subtasks: subTasksObj[];
  columnId: number;
  createdAt: string;
  description: string;
}

interface columnsObj {
  id: number;
  name: string;
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
