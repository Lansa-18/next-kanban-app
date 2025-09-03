/**
 * API functions for interacting with Supabase database
 * Handles all data fetching operations for the Kanban app
 */

import { supabase } from "./supabase";
import { boardDataObj } from "./types";

export async function getBoardData(): Promise<boardDataObj[]> {
  const { data, error } = await supabase
    .from("boards")
    .select(
      `
      *,
      columns (
        *,
        tasks (
          *,
          subtasks (*)
        )
      )
    `,
    )
    // Order boards by ID (primary boards first)
    .order("id")
    // Order columns within each board by their position
    .order("position", { referencedTable: "columns" })
    // Order tasks within each column by their position
    .order("position", { referencedTable: "columns.tasks" });

  // Handle any database errors
  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Error getting the boards data.");
  }

  return data;
}
