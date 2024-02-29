import React, { createElement } from 'react';
import './index.css';
import girl from './images/girl.png';
import experience from './images/experience.png';
import lightbulb from './images/lightbulb.png';
import email from './images/email.png';
import cv from './images/cv.png';
import AboutWindow from './AboutWindow.tsx';

var image

interface DesktopIconProps {
    iconName: String,
    visible,
    setVisible
}

const DesktopIcon = (iconInfo: DesktopIconProps) => {
    switch(iconInfo.iconName) {
        case "About Me":
            image = girl
            break
        case "Experience":
            image = experience
            break
        case "Projects":
            image = lightbulb
            break
        case "Contact":
            image = email
            break
        case "Resume":
            image = cv
            break
        default:
            image = girl
            break
    }

    if (iconInfo.iconName == "Resume") {
        return (
            <a href={process.env.PUBLIC_URL + 'KShifflett_Resume_2024.pdf'} target={'_blank'} rel="noopener noreferrer" style={{'textDecoration': 'none'}}>
                <div className="desktop-icon">
                    <img className="desktop-icon-image" src={image} />
                    <div className="desktop-icon-text-button">
                        {iconInfo.iconName}
                    </div>
                </div>
            </a>
        )
    }

    return (
        <div onClick={() => iconInfo.setVisible(!iconInfo.visible)} className="desktop-icon">
            <img className="desktop-icon-image" src={image} />
            <div className="desktop-icon-text-button">
                {iconInfo.iconName}
            </div>
        </div>
    )
}

export default DesktopIcon