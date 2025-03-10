import "./App.css"

function Task({ toggleFunc, editFunc, deleteFunc, obj, id }) {
    return (
        <li>
            <span
                className={obj.completed ? "task-crossed" : ""}
                onClick={() => toggleFunc(id)}
            >
                {obj.text}
            </span>
            <input type="text" placeholder="Edit" value={obj.text} onChange={(e) => editFunc(id, e.target.value)} />
            <button onClick={() => deleteFunc(id)}>X</button>
        </li>
    )
}

export default Task