import TaskItem from "../atoms/TaskItem.jsx"

const TaskList = ({ tasks, setTasks, style })=>{
    return(
        <ul className={style.listTasks}>
            {
                tasks.map(t => 
                    <TaskItem 
                        key={t.id}
                        task={t}
                        tasks={tasks}
                        setTasks={setTasks}
                        style={style} 
                    />
                )
            }
        </ul>
    )
}

export default TaskList