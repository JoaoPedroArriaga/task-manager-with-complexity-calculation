import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { use } from 'react'

export default function ComplexityChart() {
    const[complexityData, setComplexityData] = useState({
        SIMPLE: 0,
        MEDIUM: 0,
        COMPLEX: 0
    })

    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await api.get('/tasks')
            const counts = response.data.content.reduce((acc, task) => {
                acc[task.complexity] = (acc[task.complexity] || 0) + 1
                return acc
            }, {SIMPLE: 0, MEDIUM: 0, COMPLEX: 0})

            setComplexityData(counts)
         } catch (error) {
            console.error('Error fetching complexity data:', error)
         }   
        }
        fetchData()
    }, [])

    const data = {
        labels: ['Simple', 'Medium', 'Complex'],
        datasets: [{
            label: 'Task per Complexity',
            data: [
                complexityData.SIMPLE,
                complexityData.MEDIUM,
                complexityData.COMPLEX
            ],
            backgroundColor: [
                '#6EE7B7',
                '#93C5FD',
                '#FCA5A5'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                tricks: {
                    stepSize: 1
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

    return <Bar data={data} options={options} />
}