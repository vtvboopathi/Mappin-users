import React, { useState } from 'react'

const ControlInput = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitHandle = (event) =>{
    event.preventDefault()
    if(name && email){
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
    }
  }

  return (
    <form>
      <h1>Controlled input</h1>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>Name</label>
        <input type='text' id='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-input' />
      </div>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>Email</label>
        <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='form-input' />
      </div>
      <button type='submit' className='btn' onClick={submitHandle}>Submit</button>
    </form>
  )
}

export default ControlInput