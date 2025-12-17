import type { TaskItemProps } from '../../types'
import { formatDate } from '../../utils/taskUtils'

const TaskItem = ({ task, onDelete, onStatusChange }: TaskItemProps) => {
  const priority = task.priority ?? 'low'
  const colors = { high: 'red', medium: 'yellow', low: 'green' }

  return (
    <div className={`border-l-4 border-${colors[priority]}-500 bg-white dark:bg-gray-800 p-4 rounded shadow mb-3`}>
      <div className="flex justify-between mb-2">
        <h3 className="font-bold">{task.title}</h3>
        <span className={`px-2 py-1 rounded bg-${colors[priority]}-100 text-${colors[priority]}-800 text-xs`}>
          {priority}
        </span>
      </div>
      {task.description && <p className="text-gray-600 dark:text-gray-300 mb-3">{task.description}</p>}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Created: {formatDate(task.createdAt)}</p>
      <div className="flex justify-between">
        <select
          value={task.status}
          onChange={e => onStatusChange(task.id, e.target.value as typeof task.status)}
          className="border px-3 py-1 rounded"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
