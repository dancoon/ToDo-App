export interface TaskItemProps {
  id: string;
  name: string;
  completed: boolean;
  deleteTask: (id: string) => void;
  changeTaskStatus: (id: string) => void;
}

export interface TasksProps {
  tasks: TaskItemProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemProps[]>>;
}

export interface FormProps {
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemProps[]>>;
  tasks: TaskItemProps[];
}
