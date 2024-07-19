import React from "react";

const Loading = () => {
    return (
        <div className="border-2 border-gray-200 rounded-md w-full mx-auto py-1 px-2 my-2 flex justify-between items-center">
            <div className="w-full text-gray-400 rounded">
                <span className="animate-pulse animate-duration-1000 animate-delay-0">L</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-100">o</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-200">a</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-300">d</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-400">i</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-500">n</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-600">g</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-700">.</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-800">.</span>
                <span className="animate-pulse animate-duration-1000 animate-delay-900">.</span>
            </div>
        </div>
    );
}

export default Loading;