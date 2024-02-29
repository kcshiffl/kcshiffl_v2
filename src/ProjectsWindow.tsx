import React, { useEffect } from 'react';
import CSS from 'csstype';
import { dragElement } from './App.tsx';

interface ProjectsWindowProps {
    setProjectsWindowVisible
}

const ProjectsWindow = (props: ProjectsWindowProps) => {
    useEffect(() => {
        dragElement(document.getElementById("ProjectsWindow"));
    })

    return (
        <div id="ProjectsWindow" className='windowBasic'>
            <div className="windowHeader" style={{ backgroundColor: "#EB6133"}}>
                <div style={{paddingLeft: '15px'}}>Projects</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setProjectsWindowVisible(false)}>X</div>
            </div>
            <div className="windowContents">

            </div>

        </div>
    )
}

export default ProjectsWindow