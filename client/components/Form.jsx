import React, { useState } from 'react'
import { connect } from 'react-redux'

// imp actionCreator to dispatch API req.

const Form = ({ dispatch }) => {
  // const [state, setState] = useState('')

  // funcs to take input and dispatch req.

  // name + ingred input
  // "+" another person btn
  // submit "Party PARTY!!" btn

  return (
    <div>
      <p>hello from Form!!</p>
    </div>
  )
}

export default connect()(Form)
