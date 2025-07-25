import {Pie} from 'react-chartjs-2'
import api from '../../services/api'
import { useEffect, useState } from 'react'

export default function StatusChart() {
    const [stats, setStats] = useState(null)

    useEffect(() =>{
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

    const data = {
        labels: ['Pending', 'In Progress', 'Completed'],
        datasets: [{
            data: stats ? [stats.pendingTasks, stats.inProgressTasks, stats.completedTasks] : [0,0,0],
            backgroundColor: [
                '#F59E0B',
                '#3B82F6',
                '#10B981'
            ]
        }]
    }

    return <Pie data={data} />
}