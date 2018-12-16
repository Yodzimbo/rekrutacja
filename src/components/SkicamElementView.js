import React, { Component } from 'react';

const SkicamElementView = (props) => {
    return (
        <div className={'skicam-video-box'}>
            <h2 className={'skicam-title'}>{props.children}</h2>
            <span className={'time-date'}>{props.time}</span>
            <img src={props.video} className={'ski-view'}/>
            <img src={props.videoTwo} className={'ski-view-sec'}/>
        </div>
    )
};
export default SkicamElementView;