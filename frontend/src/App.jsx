import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Stats from './pages/Stats'

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path=" /" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="stats" element={<Stats />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}