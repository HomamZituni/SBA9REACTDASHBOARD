import { useState, useEffect } from 'react'
import Dashboard from '../../task-dashboard/src/src/components/Dashboard/Dashboard'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const t = localStorage.getItem('theme')
    return t === 'light' || t === 'dark' ? t : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="fixed top-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <Dashboard /> 
    </div>
  )
}

export default App
