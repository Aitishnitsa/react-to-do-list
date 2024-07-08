import React from "react";

const Task = ({ text }) => {
    return (
        <div className='border-2 border-black rounded-md w-full py-1 px-2 my-2'>
            <p>{text}</p>
        </div>
    );
}

export default Task;