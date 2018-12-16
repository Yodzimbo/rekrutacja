import React, { Component } from 'react';

const SkicamElementView = (props) => {
    return (
        <div className={'skicam-video-box'}>
            <h6 className={'skicam-title'}>{props.children}</h6>
            <span className={'clock text-right'}>{props.date}</span>
            <img src={props.video} className={'ski-view'}/>
            <img src={props.videoTwo} className={'ski-view'}/>
        </div>
    )
};


export default SkicamElementView;