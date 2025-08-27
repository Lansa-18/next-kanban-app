import { boardDataObj, tasksObj } from "@/_lib/types";
import { create } from "zustand";

interface GlobalState {
  selectedBoard: boardDataObj | null;
  selectedTaskToView: tasksObj | null;

  setSelectedBoard: (board: boardDataObj) => void;
  setSelectedTaskToView: (task: tasksObj) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  selectedBoard: null,
  selectedTaskToView: null,

  setSelectedTaskToView: (task: tasksObj) =>
    set({
      selectedTaskToView: task,
    }),

  setSelectedBoard: (board: boardDataObj) =>
    set({
      selectedBoard: board,
    }),
}));
