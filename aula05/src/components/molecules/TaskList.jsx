import TaskItem from "../atoms/TaskItem.jsx"

const TaskList = ({ tasks, style })=>{
    return(
        <ul className={style.listTasks}>
            {
                tasks.map(t => 
                    <TaskItem 
                        key={t.id} 
                        id={t.id} 
                        text={t.text}
                        style={style} 
                    />
                )
            }
        </ul>
    )
}

export default TaskList