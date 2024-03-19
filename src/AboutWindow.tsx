import React, { useEffect, useState } from 'react';
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
    'width': '100%',
}

const languages = ["Java", "C#", "SQL", "Python", "Javascript/Typescript", "HTML", "C", "C++"]

const AboutWindow = (props: AboutWindowProps) => {
    const [currentTab, setCurrentTab] = useState("About");

    useEffect(() => {
        dragElement(document.getElementById("aboutWindow"));
    })

    const AboutTab = () => {
        return (
            <div>
                <div>Hi!</div><br />
                <div>I'm Kim, a software engineer based in the Seattle area.</div><br />
                <div>I love creating things - my pastimes are making silly doodles or working on random development projects.</div><br />
                <div>In my free time, I love playing video games (I'm a particularly huge Pokémon nut).</div><br />
                <div>My end goal is to work on meaningful projects with a motivated, creative team.</div>
            </div>
        )
    }

    const LanguagesTab = () => {
        return (
            <div>
                Languages
            </div>
        )
    }

    const EnvironmentsTab = () => {
        return (
            <div>
                Environments
            </div>
        )
    }

    const ApplicationsTab = () => {
        return (
            <div>
                Applications
            </div>
        )
    }

    const AWSServicesTab = () => {
        return (
            <div>
                AWS Services
            </div>
        )
    }

    return (
        <div id="aboutWindow" className='windowBasic aboutWindow'>
            <div className="windowHeader" >
                <div style={{paddingLeft: '15px'}}>About Me</div>
                <div style={{flexGrow: 1}} />
                <div className="closeButton" onClick={() => props.setAboutWindowVisible(false)}>X</div>
            </div>
            <div className="windowContents">
                <div style={buttons}>
                    <button onClick={() => setCurrentTab("About")}>About</button>
                    <br /><div  style={{fontSize: 45}}>Skills:</div>
                    <div style={{flexGrow: 1}} />
                    <button onClick={() => setCurrentTab("Languages")}>Languages</button>
                    <button onClick={() => setCurrentTab("Environments")}>Environments</button>
                    <button onClick={() => setCurrentTab("Applications")}>Applications</button>
                    <button onClick={() => setCurrentTab("AWS Services")}>AWS Services</button>
                </div>
                <div style={description}>
                    {currentTab == "About" && <AboutTab />}
                    {currentTab == "Languages" && <LanguagesTab />}
                    {currentTab == "Environments" && <EnvironmentsTab />}
                    {currentTab == "Applications" && <ApplicationsTab />}
                    {currentTab == "AWS Services" && <AWSServicesTab />}
                </div>
            </div>

        </div>
    )
}

export default AboutWindow