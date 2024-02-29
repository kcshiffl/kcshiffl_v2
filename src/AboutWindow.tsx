import React, { useEffect } from 'react';
import CSS from 'csstype';
import { dragElement } from './App.tsx';

interface AboutWindowProps {
    setAboutWindowVisible
}

const buttons: CSS.Properties = {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'margin': '5px',
    'padding': '15px',
    'textAlign': 'center',
}

const description: CSS.Properties = {
    'border': '5px solid #000',
    'padding': '15px',
    'borderRadius': '15px',
    'margin': '15px',
    'fontSize': '25px',
}


const AboutWindow = (props: AboutWindowProps) => {
    useEffect(() => {
        dragElement(document.getElementById("aboutWindow"));
    })

    return (
        <div id="aboutWindow" className='windowBasic aboutWindow'>
            <div className="windowHeader" style={{ backgroundColor: "#EBB436"}}>
                <div style={{paddingLeft: '15px'}}>About Me</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setAboutWindowVisible(false)}>X</div>
            </div>
            <div className="windowContents">
                <div style={buttons}>
                    <button>About</button>
                    <br /><div  style={{fontSize: 45}}>Skills:</div>
                    <div style={{flexGrow: 1}} />
                    <button>Languages</button>
                    <button>Environments</button>
                    <button>Applications</button>
                    <button>AWS Services</button>
                </div>
                <div style={description}>
                    <div>Hi!</div><br />
                    <div>I'm Kim, a software engineer based in the Seattle area.</div><br />
                    <div>I love creating things - my pastimes are making silly doodles or working on random development projects.</div><br />
                    <div>In my free time, I love playing video games (I'm a particularly huge Pokémon nut).</div><br />
                    <div>My end goal is to work on meaningful projects with a motivated, creative team.</div>
                </div>
            </div>

        </div>
    )
}

export default AboutWindow