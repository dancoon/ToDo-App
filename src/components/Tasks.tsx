import { TaskItemProps, TasksProps } from "../interfaces/Props";
import deleteIcon from "./../assets/delete.svg";

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  name,
  completed,
  deleteTask,
  changeTaskStatus,
}) => {
  return (
    <li key={id}>
      <div className="flex bg-aqua justify-between items-center rounded-md border m-2 h-14">
        <input
          type="checkbox"
          className="ml-12 mr-4"
          checked={completed}
          onChange={() => changeTaskStatus(id)}
        />
        <p
          className="text-lg w-full overflow-hidden whitespace-nowrap overflow-ellipsis text-center"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {name}
        </p>
        <button className="mr-4 ml-1" onClick={() => deleteTask(id)}>
          <img src={deleteIcon} alt="delete" />
        </button>
        {completed}
      </div>
    </li>
  );
};

const TaskList: React.FC<TasksProps> = ({ tasks, setTaskList }) => {
  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((e) => e.id !== id);
    setTaskList(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const changeTaskStatus = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <div className="w-[350px] md:w-[650px] lg:w-[820px]">
      <ul>
        {tasks.map(({ id, name, completed }) => (
          <TaskItem
            key={id}
            id={id}
            name={name}
            completed={completed}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
          />
        ))}
      </ul>
    </div>
  );
};

const Tasks: React.FC<TasksProps> = ({ tasks, setTaskList }) => {
  return <TaskList tasks={tasks} setTaskList={setTaskList} />;
};

export default Tasks;
