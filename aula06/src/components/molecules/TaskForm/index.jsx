import { useState } from "react"

import styleTaskForm from "./TaskForm.module.css"

const TaskForm = ({ tasks, setTasks }) => {

    const [task, setTask] = useState("")
    const limite = 60
    const restante = limite - task.length

    const tratarString = (e)=>{
        const value = e.target.value
        const newValue = value.replace(/[0-9]/g,"").slice(0,limite)

        setTask(newValue)
    }

    const sendTask = e => {
        e.preventDefault()

        const newTask = {
            id: Date.now(),
            text: task,
            status: false
        }

        setTasks([...tasks,newTask])
        setTask("")
    }

    return (
        <form onSubmit={sendTask} className={styleTaskForm.container}>
            <div className={styleTaskForm.formContainer}>
                <input 
                    type="text" 
                    placeholder="Digite sua tarefa..."
                    onChange={tratarString}
                    value={task}
                    maxLength={limite}
                    required 
                />
                <button type="submit">Cadastrar</button>
            </div>
            <p
                style={{
                    fontSize: "0.8em",
                    color: restante <= 10 ? "red" : "black"
                }}
            >
                Restante:{restante}
            </p>
        </form>
    )
}

export default TaskForm