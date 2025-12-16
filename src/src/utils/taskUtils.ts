import type { Task } from '../types';


export const searchTasks = (tasks: Task[], term: string) =>
  term
    ? tasks.filter(t =>
        t.title.toLowerCase().includes(term.toLowerCase()) ||
        t.description?.toLowerCase().includes(term.toLowerCase())
      )
    : tasks;

export const filterByStatus = (
  tasks: Task[],
  status: Task["status"] | "all"
) =>
  status === 'all' ? tasks : tasks.filter(t => t.status === status);

export const filterByPriority = (
  tasks: Task[],
  priority: Task["priority"] | "all"
) =>
  priority === 'all' ? tasks : tasks.filter(t => t.priority === priority);

export const sortTasks = (tasks: Task[], sortBy: string) => {
  const order = [...tasks];

  if (sortBy === 'date-newest')
    return order.sort(
      (a, b) =>
        +new Date(b.createdAt ?? 0) - +new Date(a.createdAt ?? 0)
    );

  if (sortBy === 'date-oldest')
    return order.sort(
      (a, b) =>
        +new Date(a.createdAt ?? 0) - +new Date(b.createdAt ?? 0)
    );

  if (sortBy === 'priority') {
    const p = { high: 3, medium: 2, low: 1 };
    return order.sort(
      (a, b) =>
        (p[b.priority ?? "low"] ?? 0) -
        (p[a.priority ?? "low"] ?? 0)
    );
  }

  return order;
};

export const getTaskStats = (tasks: Task[]) => ({
  total: tasks.length,
  todo: tasks.filter(t => t.status === 'todo').length,
  inProgress: tasks.filter(t => t.status === 'in-progress').length,
  completed: tasks.filter(t => t.status === 'done').length
});

export const formatDate = (s?: string) =>
  s
    ? new Date(s).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : '';
