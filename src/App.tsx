import React from 'react';
import './index.css';
import CSS from 'csstype';
import GridLines from 'react-gridlines';
import DesktopIcon from './DesktopIcon.tsx';
import AboutWindow from './AboutWindow.tsx';

const horizontalStyle: CSS.Properties = {
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'flex-end'
}

const gridArea: CSS.Properties = {
  'height': '100%',
}


export default function App() {
  return (
  <div>
    <AboutWindow />
    <div className="desktop-icons-vertical-flex"> 
      < DesktopIcon iconName="About Me" />
      < DesktopIcon iconName="Experience" />
      < DesktopIcon iconName="Projects" />
      < DesktopIcon iconName="Contact" />
      < DesktopIcon iconName="Resume" />
    </div>
    <div id="taskbar" >
    </div>
  </div>
  )
}