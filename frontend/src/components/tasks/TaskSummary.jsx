import api from '../../services/api'
import { useEffect, useState } from 'react'

export default function TaskSummary() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/tasks/stats')
        setStats(response.data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }
    fetchStats()
  }, [])

  if (!stats) return <div>Loading statistics...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium text-blue-800">Pending</h3>
        <p className="text-2xl font-bold">{stats.pendingTasks}</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-medium text-yellow-800">In Progress</h3>
        <p className="text-2xl font-bold">{stats.inProgressTasks}</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium text-green-800">Completed</h3>
        <p className="text-2xl font-bold">{stats.completedTasks}</p>
      </div>
    </div>
  )
}