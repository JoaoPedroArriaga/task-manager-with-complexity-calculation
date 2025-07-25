import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex space-x-6">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/tasks"
                    className={({isActive}) =>
                        isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'
                    }
                >
                    Tasks
                </NavLink>
                <NavLink
                    to="/stats"
                    className={({isActive}) =>
                        isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'
                    }
                >
                    Stats
                </NavLink>
            </div>
        </nav>
    )
}