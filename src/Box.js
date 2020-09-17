import React from 'react';

const Box = ({ size }) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        background: 'red',
        margin: '5px',
        position: 'relative',
        left: '-170px',
        animationName: 'mymove',
        animationDuration: '1.7s',
        // animationDelay: '1s',
        animationIterationCount: 1,
        animationFillMode: 'forwards',

    }

    return <div style={style}></div>;
}

export default Box;