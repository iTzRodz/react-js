export interface TasksProps {
  name: string;
  isDone: boolean;
  handleStatusChange?: (status: boolean, name: string) => void;
  handleDeleteTask?: (name: string) => void;
}