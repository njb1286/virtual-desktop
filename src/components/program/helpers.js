import React from 'react';

export function mapRng (rng = Array, func = Function) {
    let output = [];
    for (let i = rng[0]; i < rng[1] + 1; i++) output.push(func(i));
    return output;
}

export function DropdownItem(props) {
    return(
        <div className="dropdown-item" onClick={props.click}>
            <div>{props.name}</div>
        </div>
    )
}