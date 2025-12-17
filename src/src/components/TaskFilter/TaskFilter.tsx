
import { useState } from 'react'
import type { TaskFilterProps } from '../../types'

const TaskFilter = ({ onSearchChange, onStatusFilter, onPriorityFilter, onSortChange }: TaskFilterProps) => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'all' | 'todo' | 'in-progress' | 'done'>('all')
  const [priority, setPriority] = useState<'all' | 'low' | 'medium' | 'high'>('all')
  const [sort, setSort] = useState<'date-newest' | 'date-oldest' | 'priority'>('date-newest')

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          onSearchChange(e.target.value)
        }}
        className="w-full border rounded px-3 py-2 mb-2"
      />

      <div className="grid grid-cols-3 gap-2">
      
        <select
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const v = e.target.value as 'all' | 'todo' | 'in-progress' | 'done'
            setStatus(v)
            onStatusFilter(v)
          }}
          className="border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

       
        <select
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const v = e.target.value as 'all' | 'low' | 'medium' | 'high'
            setPriority(v)
            onPriorityFilter(v)
          }}
          className="border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>


        <select
          value={sort}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const v = e.target.value as 'date-newest' | 'date-oldest' | 'priority'
            setSort(v)
            onSortChange(v)
          }}
          className="border px-2 py-1 rounded"
        >
          <option value="date-newest">Newest</option>
          <option value="date-oldest">Oldest</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  )
}

export default TaskFilter



