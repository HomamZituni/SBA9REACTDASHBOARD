
import { useState, useEffect } from 'react'
import type { Task } from '../../types'
import TaskForm from '../TaskForm/TaskForm'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskList from '../TaskList/TaskList'
import { searchTasks, filterByStatus, filterByPriority, sortTasks, getTaskStats } from '../../utils/taskUtils'

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'all' | 'todo' | 'in-progress' | 'done'>('all')
  const [priority, setPriority] = useState<'all' | 'low' | 'medium' | 'high'>('all')
  const [sort, setSort] = useState<'date-newest' | 'date-oldest' | 'priority'>('date-newest')

  
  useEffect(() => {
    const t = localStorage.getItem('tasks')
    if (t) setTasks(JSON.parse(t).map((task: any) => ({ ...task, createdAt: new Date(task.createdAt) })))
  }, [])

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (data: Omit<Task, 'id' | 'createdAt'>) =>
    setTasks([...tasks, { ...data, id: Date.now().toString(), createdAt: new Date() }])

  const delTask = (id: string) => setTasks(tasks.filter(t => t.id !== id))

  const changeStatus = (id: string, status: Task['status']) =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, status } : t)))


  let filtered = searchTasks(tasks, search)
  filtered = filterByStatus(filtered, status)
  filtered = filterByPriority(filtered, priority)
  filtered = sortTasks(filtered, sort)

  const stats = getTaskStats(tasks)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Task Dashboard</h1>

   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
          <p className="text-xl font-bold text-blue-500">{stats.total}</p>
          <p>Total</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
          <p className="text-xl font-bold text-yellow-500">{stats.todo}</p>
          <p>To Do</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
          <p className="text-xl font-bold text-purple-500">{stats.inProgress}</p>
          <p>In Progress</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
          <p className="text-xl font-bold text-green-500">{stats.completed}</p>
          <p>Completed</p>
        </div>
      </div>

     
      <TaskForm onAddTask={addTask} />

      
      <TaskFilter
        onSearchChange={setSearch}
        onStatusFilter={v => setStatus(v as 'all' | 'todo' | 'in-progress' | 'done')}
        onPriorityFilter={v => setPriority(v as 'all' | 'low' | 'medium' | 'high')}
        onSortChange={v => setSort(v as 'date-newest' | 'date-oldest' | 'priority')}
      />

      
      <TaskList tasks={filtered} onDelete={delTask} onStatusChange={changeStatus} />
    </div>
  )
}

export default Dashboard


