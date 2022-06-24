import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    console.log("Props", props);
    return (
        <div className="program-wrapper">
            <div className="program-outliner">
                <div className="top-components">
                    <div className="left">
                        <div className="program-options">

                            
                            <select name="" id="">
                                <option value="">Some option...</option>
                            </select>


                        </div>
                    </div>

                    <div className="middle" id='program-name'>{props.programData.name}</div>

                    <div className="right">
                        <div className="close-program-btn-wrapper">
                            <Link to='/' className='close-program' onClick={console.log("You have closed the program...")}>X</Link>
                        </div>
                    </div>
                </div>

                <div className='program'>

                    <div className="body">

                        

                    </div>
                </div>
            </div>
        </div>
    )
}