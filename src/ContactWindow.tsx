import React, { useEffect } from 'react';
import CSS from 'csstype';
import { dragElement } from './App.tsx';

interface ContactWindowProps {
    setContactWindowVisible
}

const ContactWindow = (props: ContactWindowProps) => {
    useEffect(() => {
        dragElement(document.getElementById("ContactWindow"));
    })

    return (
        <div id="ContactWindow" className='windowBasic'>
            <div className="windowHeader" style={{ backgroundColor: "#1D8DBB"}}>
                <div style={{paddingLeft: '15px'}}>Contact</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setContactWindowVisible(false)}>X</div>
            </div>
            <div className="windowContents">

            </div>

        </div>
    )
}

export default ContactWindow