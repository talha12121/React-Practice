import React, { useState } from 'react'
import "./Forms.css"

const NewForm = () => {
    const [fullName ,setFullname] = useState({
        fname:"",
        lname:"",
        phone:"",
        email:"",
        age:"",
    });
  
    const displayName =(e)=>{
      e.preventDefault();
       }
  
  // const handleChange =(e)=>{
  //   // const value = e.target.value;
  //   // const name = e.target.name;

    
  //   const {value , name} = e.target;
  //   setFullname((preValue)=>{
            //DESTRUCTURING//
  //     console.log(preValue);
  //     return{
  //       ...preValue,
  //      [name]:value,
  //     }
    //   })
   
  // }
  const clear = ()=>{
   setFullname( fullName.fname ="" , fullName.lname ="" , fullName.phone="" , fullName.email ="")
  }
      return (
      <>
        <form onSubmit={displayName}>
      <div className='div'>
          <h1>HELLO {fullName.fname} {fullName.lname}</h1>
          <p>{fullName.email} </p>
          <p> {fullName.phone}</p>
        {/* give value ={value} as  single source of truth to give value  */}
        <input className='input' type="text" placeholder='ENTER YOUR FIRST NAME'  onChange={(e) => setFullname({ ...fullName, fname: e.target.value })}  />
        <input className='input' type="text" placeholder='ENTER YOUR LAST NAME'  onChange={(e) => setFullname({ ...fullName, lname: e.target.value })} />
        <input className='input' type="number" placeholder='ENTER YOUR AGE'  onChange={(e) => setFullname({ ...fullName, age: e.target.value })} />
        <input className='input' type="email" placeholder='ENTER YOUR EMAIL'   onChange={(e) => setFullname({ ...fullName, email: e.target.value })}  />
        <input className='input' type="number" placeholder='ENTER YOUR PHONE NUMBER'  onChange={(e) => setFullname({ ...fullName, phone: e.target.value })}  />
        <div style={{display:"flex" , gap:"20px"}}>
        <button id='btn' type='submit' >Click to Submit</button>
        <button id='btn' onClick={clear}  >Click to Clear</button>
        </div>
      </div>
        </form>
        
      </>
    );
  }

export default NewForm;