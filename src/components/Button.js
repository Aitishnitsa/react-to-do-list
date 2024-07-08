import React from "react";

const Button = ({ imgSrc, onClick }) => {
    return (
        <button onClick={onClick} >
            <img src={imgSrc} alt={imgSrc} className="h-8 w-8 sm:h-12 sm:w-12" />
        </button>
    )
}

export default Button;