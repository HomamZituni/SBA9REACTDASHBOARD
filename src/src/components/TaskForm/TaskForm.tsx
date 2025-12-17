import { useState } from 'react'
import type { TaskFormProps } from '../../types'

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [err, setErr] = useState({ title: '', description: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !desc.trim()) {
      setErr({ title: !title.trim() ? 'Required' : '', description: !desc.trim() ? 'Required' : '' })
      return
    }
    onAddTask({ title: title.trim(), description: desc.trim(), status: 'todo', priority })
    setTitle(''); setDesc(''); setPriority('medium'); setErr({ title: '', description: '' })
  }

  return (
    <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Add New Task</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full border rounded px-3 py-2 mb-2"/>
      {err.title && <p className="text-red-500 text-sm">{err.title}</p>}
      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} className="w-full border rounded px-3 py-2 mb-2"/>
      {err.description && <p className="text-red-500 text-sm">{err.description}</p>}
      <select value={priority} onChange={e => setPriority(e.target.value as 'low' | 'medium' | 'high')} className="w-full border rounded px-3 py-2 mb-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Task</button>
    </form>
  )
}

export default TaskForm
