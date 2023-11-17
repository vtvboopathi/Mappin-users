import React, {useState} from 'react'
import "./style.css"

const ToggleChange = () => {

  const [showAlert, setShowAlert] = useState(false)

  return (
    <div className='head'>
      <button onClick={()=> setShowAlert(!showAlert)} className='btn'>
        Toggle
      </button>
      {showAlert && <Alert/>}
    </div>
  )
}

export default ToggleChange

const Alert = () =>{
  return (
    <div className='div h'>
      Alert Toggle
    </div>
  )
}