export interface TaskItemProps {
  id: number;
  name: string;
  completed: boolean;
  deleteTask: (id: number) => void;
  changeTaskStatus: (id: number) => void;
}

export interface TasksProps {
  tasks: TaskItemProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemProps[]>>;
}

export interface FormProps {
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemProps[]>>;
  tasks: TaskItemProps[];
}
