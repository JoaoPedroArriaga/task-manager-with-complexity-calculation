export default function TaskCard({task, onStatusChange}) {
    const statusClasses = {
        PENDING: 'status-pending',
        IN_PROGRESS: 'status-in_progress',
        COMPLETED: 'status-completed'
    }

    return (
    <div className="task-card">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{task.title}</h3>
        <span className={`status-badge ${statusClasses[task.status]}`}>
          {task.status.replace('_', ' ')}
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Complexity: {task.complexity}</p>
        <p>Points: {task.complexityPoints}</p>
      </div>
      <div className="mt-3">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="w-full p-1 text-sm border rounded"
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
    </div>
  )
}