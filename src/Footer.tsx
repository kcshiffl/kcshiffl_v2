import React, { useEffect, useState } from "react"

const Footer = () => {
    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
          setDate(new Date().toLocaleString())
        },1000)
  
        return () => clearInterval(secTimer);
    }, []);
    
    return (
    <div id="taskbar" >
        <div style={{'fontSize': '25px', 'paddingLeft': '15px'}}>kcshiffl@gmail.com</div>
        <div style={{'flexGrow': '1'}}/>
        <div style={{'fontSize': '20px', 'paddingRight': '15px'}}>{date}</div>
    </div>
    )
}

export default Footer