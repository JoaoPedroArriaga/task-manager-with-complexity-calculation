export default function TaskCard({ task, onStatusChange }) {
  const statusClasses = {
    PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    IN_PROGRESS: 'bg-blue-100 text-blue-800 border-blue-200',
    COMPLETED: 'bg-green-100 text-green-800 border-green-200'
  }

  const complexityColors = {
    SIMPLE: 'text-green-600',
    MEDIUM: 'text-blue-600',
    COMPLEX: 'text-red-600'
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500">
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-medium text-lg flex-1">{task.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[task.status]}`}>
          {task.status.replace('_', ' ')}
        </span>
      </div>
      
      <div className="mt-3 space-y-1">
        <p className={`text-sm ${complexityColors[task.complexity]}`}>
          <span className="font-medium">Complexity:</span> {task.complexity}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Points:</span> {task.complexityPoints}
        </p>
      </div>
      
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value)}
        className="mt-4 w-full p-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      >
        <option value="PENDING">Pending</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  )
}