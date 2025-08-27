"use client";

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useGlobalStore } from "@/store/useGlobalStore";

interface AddBoardModalProps {
  type?: string;
  btnName: string;
  children: React.ReactNode;
}

const addBoardSchema = z.object({
  boardName: z.string().min(1, "Board name is required"),
  columns: z
    .array(
      z.object({
        name: z.string().min(1, "Column name is required"),
      }),
    )
    .min(1, "At least one column is required"),
});

type AddBoardFormData = z.infer<typeof addBoardSchema>;

export default function AddBoardModal({
  type,
  btnName,
  children,
}: AddBoardModalProps) {
  const { selectedBoard } = useGlobalStore();
  const form = useForm<AddBoardFormData>({
    resolver: zodResolver(addBoardSchema),
    defaultValues: {
      boardName: "",
      columns: [{ name: "Todo" }, { name: "Doing" }],
    },
  });

  // Reset form when selectedBoard changes
  useEffect(() => {
    if (type === "edit" && selectedBoard) {
      form.reset({
        boardName: selectedBoard.name || "",
        columns: selectedBoard.columns.map((column) => ({
          name: column.name,
        })),
      });
    } else if (type !== "edit") {
      form.reset({
        boardName: "",
        columns: [{ name: "Todo" }, { name: "Doing" }],
      });
    }
  }, [type, selectedBoard, form]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "columns",
  });

  const onSubmit = (data: AddBoardFormData) => {
    console.log("Board created:", data);
    // TODO: Implement board creation logic
  };

  const addNewColumn = () => {
    append({ name: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-nav-background border-lines rounded-6px max-w-[30rem] border p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-foreground text-left text-[18px] font-bold">
                {type === "edit" ? "Edit Board" : "Add New Board"}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-6">
              {/* Board Name */}
              <FormField
                control={form.control}
                name="boardName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-12px font-bold">
                      Board Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Web Design"
                        className="bg-nav-background text-foreground focus:border-main-purple rounded-4px text-13px h-auto border border-[#828FA340] px-4 py-2.5 shadow-none ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="text-primary-red text-12px" />
                  </FormItem>
                )}
              />

              {/* Board Columns */}
              <div className="flex flex-col gap-3">
                <FormLabel className="text-foreground text-12px font-bold">
                  Board Columns
                </FormLabel>

                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`columns.${index}.name`}
                    render={({ field: columnField }) => (
                      <FormItem>
                        <div className="flex items-center gap-4">
                          <FormControl>
                            <Input
                              {...columnField}
                              placeholder="e.g. Todo"
                              className="bg-nav-background text-foreground focus:border-main-purple text-13px rounded-4px h-auto flex-1 border border-[#828FA340] px-4 py-2.5 shadow-none ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          {fields.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => remove(index)}
                              className="text-medium-grey hover:text-primary-red h-auto p-1"
                            >
                              <X size={18} />
                            </Button>
                          )}
                        </div>
                        <FormMessage className="text-primary-red text-12px" />
                      </FormItem>
                    )}
                  />
                ))}

                <button
                  onClick={addNewColumn}
                  className="bg-cancel-btn text-main-purple text-13px mt-2 rounded-full py-2.5 font-bold"
                >
                  + Add New Column
                </button>
              </div>
            </div>

            <DialogFooter className="mt-6 gap-4">
              <button
                type="submit"
                className="bg-main-purple hover:bg-main-purple-hover text-13px w-full rounded-full py-2.5 font-bold text-white"
              >
                {btnName}
              </button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
