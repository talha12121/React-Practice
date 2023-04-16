import {React , useState} from 'react'

const Time = () => {
     const currTime = new Date().toLocaleTimeString()
     const [time , setTime] = useState(currTime)
     
     const getTime = () =>{
        const currTime = new Date().toLocaleTimeString()
        setTime(currTime)
    }
    setInterval(getTime , 1000)
  return (
   <>
    <div style={{display:"flex" , justifyContent:"center" , marginTop:"220px" }}>
    <h1>{time}</h1>
  </div>
    <div style={{display:"flex" , justifyContent:"center"}}>
    {/* <button onClick={getTime} style={{padding:"20px" , backgroundColor:"blue"}}>Click ME to GET NEW TIME</button> */}
    </div>
   </>
  )
}

export default Time
