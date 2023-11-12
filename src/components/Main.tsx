import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import { TaskItemProps } from "../interfaces/Props";

const Main = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);
  return (
    <main className="bg-bamboo flex flex-col items-center h-fit" id="main">
      <Form tasks={tasks} setTaskList={setTasks} />
      <Tasks tasks={tasks} setTaskList={setTasks} />
    </main>
  );
};

export default Main;
