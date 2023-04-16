
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import talha from "../../assessts/talha.jpg"
import okasha from "../../assessts/okasha.jpg"
import faizan from "../../assessts/faizan.jpg"
import moiz from "../../assessts/moiz.jpg"
import aziz from "../../assessts/aziz.jpg"
import "./cards.css"
function Cards(){
const data =[
    {
       image: talha,
        name : 'MUHAMMAD TALHA',
        age: "20",
        prof:"WEB DEVELOPER",
    },
    {
        image: okasha,
        name : 'OKASHA AIJAZ',
        age: "19",
        prof:"WEB DEVELOPER",

    },
    { 
        image:aziz,
        name : 'ABDUL AZIZ',
        age: "20",
        prof:"WEB DEVELOPER",
    },
    { 
        image:moiz,   
        name : 'ABDUL MOIZ',
        age: "20",
        prof:"WEB DEVELOPER",

    },
    {   
        image:faizan,
        name : 'FAIZAN AWAN',
        age: "19",
        prof:"WEB DEVELOPER",

    },
]
return (
  <>
  <div className='sangat_div'>
    <h1 className='sangat'>The Five Musketeers  </h1>
    </div>
  

    <div className="users">
      {data.map((user) => (
        <>
        <Card className='cards' style={{ width: '20rem',borderRadius:"17px" }}>
      <Card.Img style={{boxSizing:"border-box" , width:'15rem' , margin:"0px auto"}} variant="top"  src={user.image} />
      <Card.Body>
        <Card.Title style={{textAlign:"center" , textDecoration:"underline"}}>{user.name}</Card.Title>
        <Card.Text>
         <h6>  AGE  : <span style={{fontWeight:"30px"}}>{user.age}</span></h6>
         <h6>PROFESSION  : <span style={{fontWeight:"30px"}}>{user.prof}</span></h6>
        </Card.Text>
      </Card.Body>
    </Card>
        </>
      ))}
    </div>
    </>
  );


// {data.map((newData)  =>()
//        
//             <h1>dara{newData.id}</h1>
//         
//     ))
// }
}
export default Cards