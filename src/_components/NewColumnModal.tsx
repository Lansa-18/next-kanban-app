import Button from "@/ui/Button";
import React from "react";
import Subtasks from "./Subtasks";

export default function NewColumnModal() {
  return (
    <section className="absolute flex h-full w-full items-center justify-center border">
      <article className="bg-dark-grey rounded-6px p-8">
        <form>
          <h3 className="text-xl leading-normal font-bold text-white">
            Add New Task
          </h3>
          <div>
            <label htmlFor="" className="text-12px leading-normal font-bold">
              Title
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="" className="text-12px leading-normal font-bold">
              Description
            </label>
            <textarea name="" id=""></textarea>
          </div>
          <Subtasks />
          <select name="" id="">
            <option value="">Todo</option>
            <option value="">Doing</option>
            <option value="">Done</option>
          </select>
          <Button>Create Task</Button>
        </form>
      </article>
    </section>
  );
}
