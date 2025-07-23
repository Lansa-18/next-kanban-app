import { supabase } from "./supabase";

export async function getBoardData() {
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
    .order("id")
    .order("position", { foreignTable: "columns" })
    .order("position", { foreignTable: "columns.tasks" });

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Error getting the boards data.");
  }

  return data;
}
