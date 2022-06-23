import React, { Component } from 'react';
import Item from './item';

export default class Items extends Component {
    constructor() {
        super();
    
        this.state = {
            apps: [
                {
                    name: "Notepad",
                    img_url: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/notepad-icon.png"
                }
            ]
        }
    }
    
    render() {
        return this.state.apps.map(e => <Item name={e.name} url={e.img_url} />)
    }
}