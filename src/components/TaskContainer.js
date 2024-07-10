import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const TaskContainer = React.forwardRef(({
    title = "Default Title",
    titleColor = "bg-gray-200",
    children,
    droppableProps = {}
}, ref) => {
    const { addTask } = useContext(TasksContext);
    const [addingMode, setAddingMode] = useState(false);
    const [newTaskText, setNewTaskText] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        setNewTaskText(e.target.value);
    }

    const handleAddTask = () => {
        // setAddingMode(true)
        let status = title.toLowerCase().replace(/\s/g, '');
        const newTask = {
            "status": status, "text": newTaskText
        };
        addTask(newTask);
        setAddingMode(false);
        setNewTaskText('');
    };

    return (
        <div ref={ref} {...droppableProps} className="sm:w-1/3 p-2 mx-2">
            <h1 className={`${titleColor} w-full rounded-full py-1 flex justify-center`}>
                {title}
            </h1>
            {children}
            <div className={`${addingMode ? 'border-2 border-black rounded-md w-full py-1 px-2 my-2' : 'hidden'}`}>
                <input
                    value={newTaskText}
                    onChange={handleInput}
                    name='input'
                    className="border-none w-1/2" />
                <button type='submit' onClick={handleAddTask}>Ok</button>
            </div>
            <button
                className="px-2 opacity-25 hover:opacity-100 transition ease-in-out duration-150"
                onClick={() => setAddingMode(true)}
            >
                + add task
            </button>
        </div>
    );
});

export default TaskContainer;
