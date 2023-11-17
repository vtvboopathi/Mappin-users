import React, {useState} from 'react'

const UseState = () => {

  const [person, setPerson] =useState({
    name: 'Boopathi',
    age: 23,
    work: 'Full stack develepor'
  })

const click = () =>{
  setPerson({...person, name: 'Boopathiraja Chinnusamy'})
}



  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>Use State React
      <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>I am {person.work}</h3>
        <button onClick={click} style={{color:'#fff', backgroundColor:'#000', width:'160px', height:'50px'}}>Click to add</button>
      </>
    </div>
  )
}

export default UseState