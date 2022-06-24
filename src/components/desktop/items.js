import React from 'react';
import Item from './item';

export default function(props) {
    return (
        <div>
            {props.apps.map(e => <Item app_data={e} />)}
        </div>
    )
}