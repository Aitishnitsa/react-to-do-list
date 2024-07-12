import React, { useEffect, useState } from "react";

const Header = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    }, [])

    return (
        <header className="flex justify-between items-center py-2 w-5/6 sm:w-2/3">
            <h1 className="text-2xl sm:text-4xl">To-do List</h1>
            <div className="flex space-x-2">
                <p className="text-xl font-bold">{date.toLocaleDateString()}</p>
                <span className="text-xl">|</span>
                <p className="text-xl font-bold">{date.toLocaleTimeString()}</p>
            </div>
        </header>
    )
}

export default Header;