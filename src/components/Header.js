import React from "react";
import addSvg from "../assets/add.svg";
import deleteSvg from "../assets/delete.svg";
import Button from "./Button";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-2 w-5/6 sm:w-2/3">
            <h1 className="text-2xl sm:text-4xl">To-do List</h1>
            <div className="flex space-x-2">
                <Button imgSrc={addSvg} />
                <Button imgSrc={deleteSvg} />
            </div>
        </div>
    )
}

export default Header;