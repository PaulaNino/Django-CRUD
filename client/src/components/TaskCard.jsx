import {useNavigate} from 'react-router-dom'

export function TaskCard({task}) {

    const navigate = useNavigate()
    return(
        <div 
            className="bg-sky-950 p-3 hover:bg-slate-900 hover:cursor-pointer rounded-lg "
            
            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}
        >
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p className="text-slate-400">{task.description}</p>
        </div>
    )
}