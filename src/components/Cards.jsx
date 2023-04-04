
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"
function Cards(){
const data =[
    {
        image:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/328244065_584174213154872_6424872081063443478_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFTiYtEOk4hRRHAUxV4_-JbNVbza9zIG6g1VvNr3MgbqCgGpz68f8-WfKLseH2QTaXJiyWJdO-Eot7izMVnx_JW&_nc_ohc=q2x5OF8L1D0AX_XQjoN&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCQ5MIh7xn3dxaCE6_kQ7f7Wrv9S9Iuk93xf3SmgZxMew&oe=6431D2CE",
        name : 'MUHAMMAD TALHA',
        age: "20",
        prof:"WEB DEVELOPER",
    },
    {
        image:"https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/319748050_696714302012553_4357887437658356104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEtBKELwqGciYSEB9fwnL1eTcYp96jpqPNNxin3qOmo8zjPtubDoDzzByjOqFsuHImXowBJR0rw0k1gtvqYs8MR&_nc_ohc=cg7jvSxhQ7sAX_zE2tG&_nc_oc=AQkv_yg6nD_xiiOtIAG8o9q2mUl8_RmPjlT36MRuc9y7b4s_vX-C02tytTlX-PpU6Rw&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfCo6_R_lGy1XeXWOmybn4rn3RqxQVRRfCFFffGLLxfNBw&oe=643196C6",
        name : 'OKASHA AIJAZ',
        age: "19",
        prof:"WEB DEVELOPER",

    },
    {
        image:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/232289253_3607532582805147_3583878170111809285_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGeZ7q-UfLt1laJ84W3MM4qc5THbUXG-ppzlMdtRcb6mslpWOoDCQRder3jQbZcSXya24SvmOO0_BhREmprO0ug&_nc_ohc=71gQyt82RZkAX9E02BL&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfD65bQ0Yh_ecks0aiq3PVwSXQq2GnzjuIdLsyoaB-PsRA&oe=64312D79",
        name : 'ABDUL AZIZ',
        age: "20",
        prof:"WEB DEVELOPER",
    },
    {
        image:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/267745154_1340827643015067_4647888495103220704_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEF_mLR3L6LxDUCZ0NKatqgBGmeycMUD6MEaZ7JwxQPowwYFqqWrK1QxrcRk4NZ5iIDVQptQ_2SaxMOZ6LiWrG_&_nc_ohc=5GPlmvYeqiQAX-hwFln&_nc_oc=AQlijieroGFZ_mfHOwL0U1qAtsi4es33VfKcLSOU6bKikN_3Z5eJmuWi94yY1UTuqEs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCk6PUCB_CbQi0sPbHUQAXjUVltOn6_dnN51EX7CHJK7w&oe=643140D2",
        name : 'ABDUL MOIZ',
        age: "20",
        prof:"WEB DEVELOPER",

    },
    {
        image:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/333441632_861815248222759_4025653633823901518_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHN5n-ibUd2I34sCxz2zELAzL3Mcxig5H3MvcxzGKDkfZoelx-NQez-bcRSvhKVQH3y91KuJs1M9F-sBPm69fpo&_nc_ohc=QDgES9v6xawAX9gO6bH&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfB9yFOnbgvaENryP5Am_gOq91NxBLPIz6uTFUCssUbehQ&oe=64322EAD",
        name : 'FAIZAN AWAN',
        age: "19",
        prof:"WEB DEVELOPER",

    },
]
return (
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
  );


// {data.map((newData)  =>{
//         return(
//             <h1>dara{newData.id}</h1>
//         )
//     })
// }
}
export default Cards