import React, {useState} from 'react'
import Session from './toggle-change'
import "./style.css"
import controlledInput from './forms/controlled-input'
import ControlInput from './forms/controlled-input'
import UserInput from './forms/user-input'

const App = () => {

  return(
    <div className='root'>
      <h1 className='h1'>User Mapping</h1>
      {/* <ControlInput/> */}
      <UserInput/>
    </div>
  )
}

export default App