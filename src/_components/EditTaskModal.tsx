"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

const editTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  subtasks: z.array(
    z.object({
      id: z.number().optional(),
      title: z.string().min(1, "Subtask title is required"),
      isCompleted: z.boolean(),
    }),
  ),
  status: z.string().min(1, "Status is required"),
});

type EditTaskFormData = z.infer<typeof editTaskSchema>;

export default function EditTaskModal() {
  const { selectedTaskToView } = usePlatformLaunchStore();

  const form = useForm<EditTaskFormData>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      title: selectedTaskToView?.title,
      description: selectedTaskToView?.description,
      subtasks: selectedTaskToView?.subtasks.map((subtask) => ({
        title: subtask.title,
        isCompleted: subtask.isCompleted,
      })),
      status: selectedTaskToView?.status,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "subtasks",
  });

  const onSubmit = (data: EditTaskFormData) => {
    console.log("Form submitted:", data);
  };

  const addSubtask = () => {
    append({ title: "", isCompleted: false });
  };

  return (
    <section className="fixed flex min-h-screen w-full items-center justify-center bg-black/50">
      <article className="bg-nav-background rounded-6px flex w-[30rem] flex-col gap-6 p-8">
        <h2 className="text-foreground text-[18px] font-bold">Edit Task</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-[12px] font-bold">
                    Title
                  </FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="bg-nav-background text-foreground focus:border-main-purple w-full rounded-[4px] border border-[#828FA340] px-4 py-2.5 text-[13px] focus:outline-none"
                      placeholder="e.g. Take coffee break"
                    />
                  </FormControl>
                  <FormMessage className="text-primary-red text-[12px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-[12px] font-bold">
                    Description
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      className="bg-nav-background text-foreground focus:border-main-purple w-full resize-none rounded-[4px] border border-[#828FA340] px-4 py-2 text-[13px] placeholder:text-white/25 focus:outline-none"
                      placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                    />
                  </FormControl>
                  <FormMessage className="text-primary-red text-[12px]" />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2">
              <FormLabel className="text-foreground text-[12px] font-bold">
                Subtasks
              </FormLabel>
              {fields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`subtasks.${index}.title`}
                  render={({ field: subtaskField }) => (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormControl>
                          <input
                            {...subtaskField}
                            className="bg-nav-background text-foreground focus:border-main-purple flex-1 rounded-[4px] border border-[#828FA340] px-4 py-2 text-[13px] focus:outline-none"
                            placeholder="e.g. Make coffee"
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => remove(index)}
                          className="text-medium-grey hover:text-primary-red h-auto p-1"
                        >
                          <X size={18} />
                        </Button>
                      </div>
                      <FormMessage className="text-primary-red text-[12px]" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <Button
              type="button"
              variant="secondary"
              onClick={addSubtask}
              className="bg-main-purple/10 text-main-purple hover:bg-main-purple/20 rounded-full py-2 text-[13px] font-bold"
            >
              + Add New Subtask
            </Button>

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-[12px] font-bold">
                    Status
                  </FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="bg-nav-background text-foreground border-[#828FA340] rounded-[4px] focus:border-main-purple w-full border px-4 py-2 text-[13px] focus:outline-none"
                    >
                      <option value="Todo">Todo</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                  </FormControl>
                  <FormMessage className="text-primary-red text-[12px]" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-main-purple hover:bg-main-purple-hover rounded-full py-2 text-[13px] font-bold text-white"
            >
              Save Changes
            </Button>
          </form>
        </Form>
      </article>
    </section>
  );
}
