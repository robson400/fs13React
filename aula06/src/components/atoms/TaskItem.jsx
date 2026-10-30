const TaskItem = ({ task, tasks, setTasks, style })=>{

    const attTasks = () => {
        const taskUpdated = tasks.map(t =>{
            return t.id == task.id ? {...t, status: !t.status} : t
        })
        setTasks(taskUpdated)
    }

    return(

        <li className={style.itemTask}>
            <div className={style.itemContent}>
                <input 
                    type="checkbox" 
                    id={task.id} 
                    name="task-status"
                    onClick={attTasks}
                />
                <label 
                    htmlFor={task.id}
                    style={{
                        textDecoration: task.status ? "line-through":"none"
                    }}
                >
                    {task.text}
                </label>
            </div>
            <button className={style.btnItem}>Excluir</button>
        </li>
    )
}

export default TaskItem