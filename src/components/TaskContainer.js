import React from "react";
import Task from "./Task";

const TaskContainer = React.forwardRef(({
    title = "Default Title",
    titleColor = "bg-gray-200",
    children,
    droppableProps = {}
}, ref) => {
    return (
        <div ref={ref} {...droppableProps} className="sm:w-1/3 p-2 mx-2">
            <h1 className={`${titleColor} w-full rounded-full py-1 flex justify-center`}>
                {title}
            </h1>
            {children}
            <button className="px-2 opacity-25 hover:opacity-100 transition ease-in-out duration-150">
                + add task
            </button>
        </div>
    );
});

export default TaskContainer;