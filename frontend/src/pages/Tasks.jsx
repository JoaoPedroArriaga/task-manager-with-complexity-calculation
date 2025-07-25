import TaskList from "../components/tasks/TaskList"
import TaskForm from "../components/tasks/TaskForm"

export default function Tasks() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <TaskList />
        </div>
        <div>
          <TaskForm />
        </div>
      </div>
    </div>
  )
}