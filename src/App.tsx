import React from 'react';
import './index.css';
import CSS from 'csstype';
import GridLines from 'react-gridlines';
import DesktopIcon from './DesktopIcon.tsx';
import girl from './images/girl.png'

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
    <div className="vertical-flex"> 
      <img className="desktop-icon" src={girl} />
      <div> hi</div>
      <div> hi</div>
    </div>
    <div id="taskbar" >
    </div>
  </div>
  )
}