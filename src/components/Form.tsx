import React, { FormEvent, useState } from "react";
import { FormProps } from "../interfaces/Props";
import addIcon from "./../assets/add_icon.svg";

const Form: React.FC<FormProps> = ({ setTaskList, tasks }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = taskName.trim();
    if (name == "") return;
    const task = tasks[0];
    const taskObject = {
      ...task,
      id: tasks.length,
      name: name,
      completed: false,
    };
    const newTasks = [taskObject, ...tasks];

    setTaskList(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskName("");
  };

  return (
    <form
      action=""
      className="border rounded-3xl bg-white border-white h-12 flex items-center m-1 w-[350px] md:w-[600px] lg:w-[720px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add tasks here..."
        className="flex-grow ml-3 p-2 outline-none"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 bg-slate-400 h-full rounded-r-3xl w-20 flex justify-center items-center"
      >
        <span>
          <img src={addIcon} alt="add task" />
        </span>
      </button>
    </form>
  );
};

export default Form;
