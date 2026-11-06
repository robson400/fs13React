import { useEffect, useState } from "react"
import PageDefault from "../../templates/PageDefault.jsx"
import SectionDefault from "../../templates/SectionDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../molecules/TaskForm/index.jsx"
import TaskCounter from "../../atoms/TaskCounter.jsx"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    // HOOKS - useState:
    const [tasks, setTasks] = useState([])
    const [isFineshed, setIsFineshed] = useState(false)

    useEffect(() =>{
        const oldTasks = JSON.parse(localStorage.getItem("tasks"))
        if(tasks){
            setTasks(oldTasks)
        }
        setIsFineshed(true)
    },[])

    useEffect(()=>{
        if(isFineshed){
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [tasks, isFineshed])

    return(
        <PageDefault>
            <SectionDefault className={styleTasks.sectionTasks}>
                <h1>Gerenciamento de Tarefas</h1>
                <TaskForm tasks={tasks} setTasks={setTasks} />
                <TaskCounter tasks={tasks} />
                <TaskList tasks={tasks} setTasks={setTasks} style={styleTasks} />
            </SectionDefault>
        </PageDefault>
    )
}

export default Tasks