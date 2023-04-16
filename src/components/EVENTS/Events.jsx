import React, { useState } from 'react'
import "./Events.css"

const Events = () => {
    const click = "CLICK ME"
    const [text , setText]  = useState(click); 
    function changeText(){
        setText("OUCH 😮‍💨")    
    }
    function changeNewText(){
        setText("WOW 💯")    
    }

 
  return (
    <>
      <div className='div'>
        <button id='btn' onClick={changeText}  onDoubleClick={changeNewText}>{text}</button>
      </div>
    </>
  )
}

export default Events
