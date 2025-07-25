import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'

export default function Tasks() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TaskList />
        </div>
        <div>
          <TaskForm />
        </div>
      </div>
    </div>
  )
}