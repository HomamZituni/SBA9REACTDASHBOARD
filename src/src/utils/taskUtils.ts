import type { Task } from "../types"

// Search tasks by title or description
export const searchTasks = (tasks: Task[], term: string) => {
  if (!term) return tasks
  const lower = term.toLowerCase()
  return tasks.filter(t =>
    t.title.toLowerCase().includes(lower) ||
    (t.description?.toLowerCase().includes(lower) ?? false)
  )
}

// Filter tasks by status
export const filterByStatus = (tasks: Task[], status: Task["status"] | "all") =>
  status === "all" ? tasks : tasks.filter(t => t.status === status)

// Filter tasks by priority
export const filterByPriority = (tasks: Task[], priority: Task["priority"] | "all") =>
  priority === "all" ? tasks : tasks.filter(t => t.priority === priority)

// Sort tasks by date or priority
export const sortTasks = (
  tasks: Task[],
  sortBy: "date-newest" | "date-oldest" | "priority"
) => {
  const c = [...tasks]
  if (sortBy === "date-newest") return c.sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0))
  if (sortBy === "date-oldest") return c.sort((a, b) => (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0))
  if (sortBy === "priority") {
    const p = { high: 3, medium: 2, low: 1 }
    return c.sort((a, b) => (p[b.priority ?? "low"] ?? 0) - (p[a.priority ?? "low"] ?? 0))
  }
  return c
}

// Get task statistics
export const getTaskStats = (tasks: Task[]) => ({
  total: tasks.length,
  todo: tasks.filter(t => t.status === "todo").length,
  inProgress: tasks.filter(t => t.status === "in-progress").length,
  completed: tasks.filter(t => t.status === "done").length
})

//Date formatting
export const formatDate = (d?: Date) =>
  d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""

