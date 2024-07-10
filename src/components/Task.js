import React from "react";

const Task = ({ text, isDragging }) => {
    return (
        <div className={`${isDragging ? "bg-gray-200" : "bg-white"} hover:bg-gray-50 transition ease-in-out duration-150 border-2 border-black rounded-md w-full py-1 px-2 my-2`}>
            {text}
        </div>
    );
};

export default Task;