import ComplexityChart from '../components/charts/ComplexityChart'
import StatusChart from '../components/charts/StatusChart'

export default function Dashboard() {
    return(
        <div className="space-y-6">
            <h1 className="text-2x1 font-bold">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-x1 font-semibold mb-4">Status das Tarefas</h2>
                    <StatusChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-x1 font-semibold mb-4">Complexidade</h2>
                    <ComplexityChart />
                </div>
            </div>
        </div>
    )
}