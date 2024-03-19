import React, { useEffect, useState } from 'react';
import './index.css';
import CSS from 'csstype';
import GridLines from 'react-gridlines';
import DesktopIcon from './DesktopIcon.tsx';
import AboutWindow from './AboutWindow.tsx';
import ExperienceWindow from './ExperienceWindow.tsx';
import ProjectsWindow from './ProjectsWindow.tsx';
import ContactWindow from './ContactWindow.tsx';
import Footer from './Footer.tsx';

const horizontalStyle: CSS.Properties = {
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'flex-end'
}

const gridArea: CSS.Properties = {
  'height': '100%',
}

export function dragElement(elmnt) {
  if (!elmnt) return;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var windowElement = document.getElementById(elmnt.id);
  if (windowElement != null) {
    // if present, the header is where you move the DIV from:
    windowElement.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const App = () => {
  const [aboutWindowVisible, setAboutWindowVisible] = useState(true);
  const [experienceWindowVisible, setExperienceWindowVisible] = useState(false);
  const [projectsWindowVisible, setProjectsWindowVisible] = useState(false);
  const [contactWindowVisible, setContactWindowVisible] = useState(false);
  
  return (
  <div style={{'minHeight': '100%', 'minWidth':'100%', 'position': 'absolute'}}>
    <div className={`window ${aboutWindowVisible && 'visible'}`}>
        { aboutWindowVisible && <AboutWindow setAboutWindowVisible={setAboutWindowVisible} /> }
    </div>
    <div className={`window ${experienceWindowVisible && 'visible'}`}>
        { experienceWindowVisible && <ExperienceWindow setExperienceWindowVisible={setExperienceWindowVisible} /> }
    </div>
    <div className={`window ${projectsWindowVisible && 'visible'}`}>
        { projectsWindowVisible && <ProjectsWindow setProjectsWindowVisible={setProjectsWindowVisible} /> }
    </div>
    <div className={`window ${contactWindowVisible && 'visible'}`}>
        { contactWindowVisible && <ContactWindow setContactWindowVisible={setContactWindowVisible} /> }
    </div>

    <div className="desktop-icons-vertical-flex"> 
      < DesktopIcon iconName="About Me" visible={aboutWindowVisible} setVisible={setAboutWindowVisible} />
      < DesktopIcon iconName="Experience" visible={experienceWindowVisible} setVisible={setExperienceWindowVisible} />
      < DesktopIcon iconName="Projects" visible={projectsWindowVisible} setVisible={setProjectsWindowVisible}/>
      < DesktopIcon iconName="Contact" visible={contactWindowVisible} setVisible={setContactWindowVisible}/>
      < DesktopIcon iconName="Resume" visible={false} setVisible={false}/>
    </div>
    <Footer />
  </div>
  )
}

export default App;