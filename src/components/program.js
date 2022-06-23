import React from 'react';

export default function() {
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

                    <div className="middle" id='program-name'>Some program name...</div>

                    <div className="right">
                        <div className="close-program-btn-wrapper">
                            <button className='close-program' onClick={console.log("You have closed the program...")}>X</button>
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