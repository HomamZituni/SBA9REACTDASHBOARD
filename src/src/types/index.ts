export interface Task {
  id: string
  title: string
  status: "todo" | "in-progress" | "done"
  priority?: "low" | "medium" | "high"
  description?: string
  createdAt?: Date
}

export interface TaskItemProps {
  task: Task
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Task["status"]) => void
}

export interface TaskListProps {
  tasks: Task[]
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Task["status"]) => void
}

export interface TaskFormProps {
  onAddTask: (task: Omit<Task, "id" | "createdAt">) => void
}

export interface TaskFilterProps {
  onSearchChange: (val: string) => void;
  onStatusFilter: (val: Task['status'] | 'all') => void;
  onPriorityFilter: (val: Task['priority'] | 'all') => void;
  onSortChange: (val: 'date-newest' | 'date-oldest' | 'priority') => void;
}


export interface DashboardProps {
  theme: "light" | "dark"
}
