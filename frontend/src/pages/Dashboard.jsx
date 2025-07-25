import ComplexityChart from '../components/charts/ComplexityChart'
import StatusChart from '../components/charts/StatusChart'
import TaskSummary from '../components/tasks/TaskSummary'

export default function Dashboard() {
  return (
    <div className="space-y-8 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Dashboard</h1>
        <p className="text-gray-600">Overview of your tasks and productivity</p>
        
        <TaskSummary className="my-6" />
        
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Task Status</h2>
            <StatusChart />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Complexity Analysis</h2>
            <ComplexityChart />
          </div>
        </div>
      </div>
    </div>
  )
}