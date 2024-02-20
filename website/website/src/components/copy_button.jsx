import React, {useState} from 'react';

export function CopyButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {

        setIsHovered(true);

    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 2300); // Reset click state after 1 second

    };

    return (
        <button
            id="copy_button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className={isClicked ? 'font-extrabold' : ''}
        >
            {isClicked ? 'Copied!' : (isHovered ? 'Click to Copy' : 'Copy!')}
        </button>
    );
}

