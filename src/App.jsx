import { useState } from "react"

import "./App.css"
import Task from "./Task";

function App() {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput("");
        }
    }

    const editTask = (index, newText) => {
        setTasks(
            tasks.map((task, i) => 
                i === index ? {...task, text: newText} : task
            )
        );
    }

    const toggleTask = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    }

    return (
        <>
            <div>
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={addTask}>
                        Add
                    </button>
            </div>

            <ul>
                    {tasks.map((task, index) => (
                        <Task key={index} toggleFunc={toggleTask} editFunc={editTask} deleteFunc={deleteTask} obj={task} id={index} />
                    ))}
            </ul>
        </>
    )
}

export default App
