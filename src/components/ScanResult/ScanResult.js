import React from 'react';

const ScanResult = (props) => {
    return (
        <div>
            <h2>{props.title}:</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default ScanResult;