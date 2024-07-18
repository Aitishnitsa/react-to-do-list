import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
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
            <div className="flex flex-col sm:flex-row sm:space-x-2">
                <p className="text-xl font-bold">{date.toLocaleDateString()}</p>
                <span className="text-xl hidden sm:block">|</span>
                <p className="text-xl font-bold">{date.toLocaleTimeString()}</p>
                <span className="text-xl hidden sm:block">|</span>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ?
                        <svg className={`feather feather-sun`} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5" className="svg-elem-1"></circle>
                            <line x1="1" x2="3" y1="12" y2="12" className="svg-elem-2"></line>
                            <line x1="12" x2="12" y1="1" y2="3" className="svg-elem-3"></line>
                            <line x1="12" x2="12" y1="21" y2="23" className="svg-elem-4"></line>
                            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" className="svg-elem-5"></line>
                            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" className="svg-elem-6"></line>
                            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" className="svg-elem-7"></line>
                            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" className="svg-elem-8"></line>
                            <line x1="21" x2="23" y1="12" y2="12" className="svg-elem-9"></line>
                        </svg>
                        :
                        <svg className={`feather feather-moon}`} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" class="svg-elem-10" />
                        </svg>
                    }
                </button>
            </div>
        </header>
    )
}

export default Header;