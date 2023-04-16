import React, { useState } from 'react'
import "./Forms.css"

const Forms = () => {
  const [value ,setValue] = useState("")
  const [value2 ,setValue2] = useState("")
  const [name ,setName] = useState('')

  const displayName =(e )=>{
  // to not to refresh the browser    
    e.preventDefault();
    // to display name on web using {value} from input state
     setName(value + " " + value2)
  }

const handleChange =(e)=>{
  // giving parameter e to take the value from input on change and using target method to get value
  setValue(e.target.value)
}

const handleChange2 =(e)=>{
  // giving parameter e to take the value from input on change and using target method to get value
  setValue2(e.target.value)
}

const clearText=()=>{
  setValue("");
  setValue2("");
  
}

  return (
    <>
      <form onSubmit={displayName}>
    <div className='div'>
        <h1>HELLO {name}</h1>
      {/* give value ={value} as  single source of truth to give value  */}
      <input className='input' type="text" placeholder='ENTER YOUR FIRST NAME' value={value} onChange={handleChange} />
      <input className='input' type="text" placeholder='ENTER YOUR LAST NAME' value={value2} onChange={handleChange2} />
      <div style={{display:"flex" , gap:"20px"}}>
      <button id='btn' type='submit' >Click to Submit</button>
      <button id='btn'   onClick={clearText} >Click to Clear</button>
      </div>
    </div>
      </form>
      
    </>
  );
}

export default Forms
