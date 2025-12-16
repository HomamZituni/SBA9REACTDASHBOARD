export interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority?: "low" | "medium" | "high";
  description?: string;
  createdAt?: Date;
}

export interface TaskItemProps {
task: Task; 
onDelete: (id: string) => void;
onStatusChange: (id: string, status: Task['status']) => void;
}

export interface TaskListProps {
tasks: Task[];
onDelete: (id: string) => void;
onStatusChange: (id:string, status: Task['status']) => void;
}

export interface TaskFormProps {
onAddTask: (task: Omit<Task, 'id'| 'createdAt'>) => void;
}

export interface TaskFilterProps {
  onSearchChange: (val: string) => void;
  onStatusFilter: (val: string) => void;
  onPriorityFilter: (val: string) => void;
  onSortChange: (val: string) => void;
}

export interface DashboardProps {
  theme: 'light' | 'dark';
}