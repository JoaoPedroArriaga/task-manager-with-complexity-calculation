import StatusChart from '../components/charts/StatusChart'
import ComplexityChart from '../components/charts/ComplexityChart'

export default function Stats() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Stats</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Task Status</h2>
          <StatusChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Complexity Distribution</h2>
          <ComplexityChart />
        </div>
      </div>
    </div>
  )
}