import React from 'react';

const SkicamGridView = (props) => {
    return (
        <div className={'container'}>
            <div className={'skicam-box'}>
                {props.children}
            </div>
        </div>
    )
};

export default SkicamGridView;