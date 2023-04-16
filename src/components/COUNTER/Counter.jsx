import {React , useState} from 'react'

const Counter = () => {
    const [state, setstate] = useState(0);
    const Add = ()=>{
      setstate(state + 1);
    }
  return (
    <>
    <div style={{display:"flex" , justifyContent:"center" ,marginTop:"220px"}}>
    <h1>{state}</h1>
  </div>
    <div style={{display:"flex" , justifyContent:"center"}}>
    <button onClick={Add} style={{padding:"20px" , backgroundColor:"blue"}}>Click ME to ADD</button>
    </div>
    </>
  )
}

export default Counter
