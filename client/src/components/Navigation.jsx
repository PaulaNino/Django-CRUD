import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl mb-4">
                    Tareas
                </h1>
            </Link>
            <button className="bg-green-800 px-3 py-2 rounded-lg mb-3 mt-3"><Link to="/tasks-create"><h1 className="font-bold text-1xl">
                + Crear Tarea
            </h1> </Link></button>
            
        </div>
    )
}

