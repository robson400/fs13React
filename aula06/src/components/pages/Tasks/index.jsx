import { useState } from "react"
import PageDefault from "../../templates/PageDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../molecules/TaskForm/index.jsx"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    // HOOKS - useState:
    const [tasks, setTasks] = useState([{id: 1, text:"padrao"}])

    return(
        <PageDefault>
            <section className={styleTasks.container}>
                <h1>Gerenciamento de Tarefas</h1>
                <TaskForm tasks={tasks} setTasks={setTasks} />
                <TaskList tasks={tasks} setTasks={setTasks} style={styleTasks} />
            </section>
        </PageDefault>
    )
}

export default Tasks