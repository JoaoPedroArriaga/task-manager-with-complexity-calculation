import { useState, useEffect } from "react"
import api from '../../services/api'
import TaskCard from "./TaskCard"

export default function TaskList() {
    const [task, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks')
            setTasks(response.data.content)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching tasks:', error)
        }
    }

    const handleStatusChange = async (taskId, newStatus) => {
    try {
      await api.patch(`/tasks/${taskId}/status?status=${newStatus}`)
      fetchTasks()
    } catch (error) {
      console.error('Error updating task status:', error)
    }
  }

    return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onStatusChange={handleStatusChange} 
            />
          ))}
        </div>
      )}
    </div>
  )
}