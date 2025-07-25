import {useState} from 'react'
import api from '../../services/api'

export default function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        complexity: 'SIMPLE'
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/tasks', task)
            setTask({title: '', complexity: 'SIMPLE'})
            alert('Task created with success')
        } catch (error) {
            console.error('Error creating task:', error)
        }
    }

    return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({...task, title: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Complexity</label>
          <select
            value={task.complexity}
            onChange={(e) => setTask({...task, complexity: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="SIMPLE">Simple</option>
            <option value="MEDIUM">Medium</option>
            <option value="COMPLEX">Complex</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  )
}