const TaskItem = ({ id,text,style })=>{
    return(
        <li className={style.itemTask}>
            <div className={style.itemContent}>
                <input 
                    type="checkbox" 
                    id={id} 
                    name="task-status" 
                />
                <label htmlFor={id}>{text}</label>
            </div>
            <button className={style.btnItem}>Excluir</button>
        </li>
    )
}

export default TaskItem