import { useState, useEffect } from 'react'
import api from '../../services/api'
import TaskCard from './TaskCard'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks')
      setTasks(response.data.content)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      // Optimistic update
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ))
      
      // API call
      await api.patch(`/tasks/${taskId}/status`, { status: newStatus })
      
      // Refresh data
      await fetchTasks()
    } catch (error) {
      console.error('Error updating status:', error)
      // Revert on error
      fetchTasks()
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // ... loading and error states ...

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onStatusChange={handleStatusChange} 
        />
      ))}
    </div>
  )
}