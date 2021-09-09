import React from 'react'

import Form from './Form'
import Drink from './Drink'

function App () {
  // bit of a title

  return (
    <div className=''>
      <h1>Let's get this party started!!</h1>
      <Form />
      <Drink />
    </div>
  )
}

// EXAMPLE OF CHILDREN PROP THING
// <LoadSubreddit>
//   <WaitIndicator />
// </LoadSubreddit>

export default App
