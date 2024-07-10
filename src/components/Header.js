import React from "react";
import deleteSvg from "../assets/delete.svg";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-2 w-5/6 sm:w-2/3">
            <h1 className="text-2xl sm:text-4xl">To-do List</h1>
            <div className="flex space-x-2">
                <button>
                    <img src={deleteSvg} alt='delete' className="h-8 w-8 sm:h-12 sm:w-12" />
                </button>
            </div>
        </header>
    )
}

export default Header;