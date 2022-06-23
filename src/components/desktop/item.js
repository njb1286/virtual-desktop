import React from 'react';

export default function(props) {
    return (
        <div className='desktop-app'>
            <div className="desktop-image-wrapper">
                <img src={props.url} alt="" />
            </div>

            <div className="desktop-app-name">{props.name}</div>
        </div>
    )
}