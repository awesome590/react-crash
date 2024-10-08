import './Todo.css'

function Todo({ title, para, onTodoDelete }) {
    return (
    <div className="todo">
        <h2>{title}</h2>
        <p>{para}</p>
        <button onClick={onTodoDelete}>Delete</button>
    </div>
    );
}

export default Todo;
