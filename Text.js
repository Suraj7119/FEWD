import React, { useState } from 'react';

const UpdateText = () => {
    const [text, setText] = useState('Initial Text');

    const handleClick = () => {
        setText('Text has been updated!');
    };

    return (
        <div className="p-4">
            <p>{text}</p>
            <button
                onClick={handleClick}
            >
                Update Text
            </button>
        </div>
    );
};

export default UpdateText;