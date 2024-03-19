import React, { useEffect } from 'react';
import CSS from 'csstype';
import { dragElement } from './App.tsx';

interface ExperienceWindowProps {
    setExperienceWindowVisible
}

const ExperienceWindow = (props: ExperienceWindowProps) => {
    useEffect(() => {
        dragElement(document.getElementById("experienceWindow"));
    })

    return (
        <div id="experienceWindow" className='windowBasic experienceWindow'>
            <div className="windowHeader">
                <div style={{paddingLeft: '15px'}}>Experience</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setExperienceWindowVisible(false)}>X</div>
            </div>
            <div className="windowHeader">
                <div style={{paddingLeft: '15px'}}>Niantic</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setExperienceWindowVisible(false)}>X</div>
            </div>
            <div className="windowContents">
                aweirhewohrh
            </div>

        </div>
    )
}

export default ExperienceWindow