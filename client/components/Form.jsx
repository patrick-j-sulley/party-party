import React, { useState } from 'react'
import { connect } from 'react-redux'

// imp actionCreator to dispatch API req.

const Form = ({ dispatch }) => {
  // this stuff will need to be replaced with some weird array state to track all of the people's requests
  const [userName, setUserName] = useState('')
  const [userIngr, setUserIngr] = useState('')

  // funcs to take input and dispatch req.
  
  const formSubmit = (e) => {
    e.preventDefault()
    console.log(`formSubmit for something with ${userIngr} for a beautiful ${userName}`)
  }

  const addPerson = () => console.log('addPerson yo')

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder='name'
          required
          onChange={(e) => setUserName(e.target.value)} />
        <input
          type="text"
          placeholder='desired ingredient'
          required
          onChange={(e) => setUserIngr(e.target.value)} />
        <button type='button' onClick={addPerson}>+</button>
        <button type='submit'>Party PARTY!!</button>
      </form>
    </div>
  )
}

export default connect()(Form)
