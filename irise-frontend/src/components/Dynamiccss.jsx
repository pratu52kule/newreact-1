import React, { useState } from 'react';

const DynamicCss = () => {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const handleButtonClick = () => {
        setBackgroundColor('blue');
    };
    const myStyles = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer'
    };
    return (
        <div style={myStyles} onClick={handleButtonClick}>
            Click me to change background color!
        </div>
    );
};
export default DynamicCss;