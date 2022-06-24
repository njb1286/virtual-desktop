import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <Link to={props.app_data.pageName} className='desktop-app'>
            <div className="desktop-image-wrapper">
                <img src={props.app_data.icon_url} alt="" />
            </div>

            <div className="desktop-app-name">{props.app_data.name}</div>
        </Link>
    )
}