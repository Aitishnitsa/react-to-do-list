import React from "react";

const TaskContainer = ({ title, titleColor, children }) => {
    return (
        <div className='sm:w-1/3 p-2 mx-2'>
            <div className={`${titleColor} w-full rounded-full py-1 flex justify-center`}>
                <h1>{title}</h1>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default TaskContainer;