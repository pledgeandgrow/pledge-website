import React, { useState, useEffect } from "react";

const Button = ({ text, size=2 }) => {
    return (
        <div>
            <button className="flex justify-center gap-4 items-center hover:text-green-800">
                <p className="text-5xl " data-text={text}>
                    {text}
                </p>
                <span>

                
                <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-10 mt-2"  // Adjust width here
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={6}
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
</svg>

                </span>
            </button>
        </div>
    );
};

export default Button;
