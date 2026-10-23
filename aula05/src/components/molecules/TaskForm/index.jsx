import styleTaskForm from "./TaskForm.module.css"

const TaskForm = () => {
    return (
        <form className={styleTaskForm.container}>
            <input 
                type="text" 
                placeholder="Digite sua tarefa..."
                required 
            />
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default TaskForm