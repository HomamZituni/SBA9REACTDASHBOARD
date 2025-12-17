import TaskItem from './TaskItem'
import type { TaskListProps } from '../../types'

const TaskList = ({ tasks, onDelete, onStatusChange }: TaskListProps) => {
  if (tasks.length === 0) {
    return <div className="text-center py-12 text-gray-500 dark:text-gray-400">No tasks found</div>
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  )
}

export default TaskList
