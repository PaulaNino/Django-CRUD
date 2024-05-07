import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTaks, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TasksFormPage() {
  const { register, handleSubmit, formState:
    { errors },
    setValue
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTaks(params.id, data)
      toast.success('Tarea actualizada exitosamente', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
          fontFamily: "Helvetica",
          height: "40px"
        }
      })
    } else {
      await createTask(data)
      toast.success('Tarea creada exitosamente', {
        position: "bottom-right",
        style: {
          background: "#3f3f46",
          color: "#fff",
          fontFamily: "Helvetica",
          height: "40px"
        }
      })
    }
    navigate("/tasks")

  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loadTask()

  }) 

  return (
    <div className="max-w-xl mx-auto ">
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Título"
            {...register("title", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" />
        {errors.title && <span className='text-red-500 mt-1'>Este campo es requerido</span>}

        <textarea rows="3" placeholder="Descripción"
            {...register("description", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 mt-5">
        </textarea>
        {errors.description && <span className='text-red-500 mt-1'>Este campo es requerido</span>}

        <button className="bg-blue-900  p-3 rounded-lg block w-full mt-5">Guardar</button>
    </form>


    {params.id && (
        <div className="flex justify-end ">
            <button className="bg-red-700 p-3 rounded-lg w-full mt-3"
                onClick={async () => {
                    const accepted = window.confirm('¿Esta seguro de eliminar esta tarea?')
                    if (accepted) {
                        await deleteTask(params.id)
                        toast.success('Tarea eliminada exitosamente', {
                            position: "bottom-right",
                            style: {
                                background: "#3f3f46",
                                color: "#fff",
                                fontFamily: "Helvetica",
                                height: "40px"
                            }
                        })
                        navigate("/tasks")
                    }
                }}> Eliminar </button>
        </div>
    )
    }
</div > 




  )
}
