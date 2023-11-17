import React, {useState} from 'react'
import {data} from '../components/Data'
import '../style.css'

const UserInput = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState(data)

  const submitHandle = (event) =>{
    event.preventDefault()
    if(!name) return

    const fakeID = Date.now()
    const newUser = {id:fakeID, name: name, email:email}
    const updatedUser = [...users, newUser]
    setUsers(updatedUser)

    setName('')
    setEmail('')
  }


  const deleteUser = (id) => {
    const leftUser = users.filter((user) => user.id !== id);
    setUsers(leftUser);
  }

  return(
    <>
      <form onSubmit={submitHandle}>
        <h1>User input With Mail ID</h1>
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
      <br></br>
      <div className='div'>
      <marquee className='padding'>{users.length == 0 ? 'You have no users added' : null}</marquee>
      {users.map((user)=>{
        return(
          <div key={user.id} className='div'>
          <h5>{user.name}</h5>
          <p>{user.email}</p>
          <button className='btn' onClick={()=> deleteUser(user.id)}>click to remove</button>
        </div>
        )
      })}
      </div>
    </>
  )
}

export default UserInput