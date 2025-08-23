/**
 * API functions for interacting with Supabase database
 * Handles all data fetching operations for the Kanban app
 */

import { supabase } from "./supabase";
import { boardDataObj } from "./types";

/**
 * Fetches complete board data including nested columns, tasks, and subtasks
 * Uses Supabase's nested query feature to get all related data in one request
 *
 * @returns {Promise} Array of board objects with nested structure:
 *   - boards
 *     - columns (ordered by position)
 *       - tasks (ordered by position)
 *         - subtasks
 *
 * @throws {Error} Throws error if Supabase query fails
 */
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
