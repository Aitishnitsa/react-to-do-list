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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return; // Prevent adding empty tasks
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
            <h1 className={`${titleColor} text-black dark:text-black animate-jump-in w-full rounded-full py-1 flex justify-center font-bold relative z-10`}>
                {title}
            </h1>
            {children}
            <form
                onSubmit={handleSubmit}
                className={`${addingMode ? 'border-2 border-black dark:border-white rounded-md w-full py-1 px-2 my-2' : 'hidden'}`}
            >
                <input
                    value={newTaskText}
                    onChange={handleInput}
                    name='input'
                    placeholder="Enter new task"
                    className="focus-visible:outline-none w-full bg-transparent"
                />
            </form>
            <button
                className="animate-flip-up animate-delay-300 px-2 opacity-25 hover:opacity-100 transition ease-in-out duration-150"
                onClick={() => setAddingMode(true)}
            >
                + add task
            </button>
        </div>
    );
});

export default TaskContainer;
