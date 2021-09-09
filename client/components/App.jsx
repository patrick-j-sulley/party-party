import React from 'react'

import Form from './Form'
import Drink from './Drink'

function App() {
  // bit of a title

  return (
    <div className=''>
      <div class="row">
        <h1>Let's get this party started!!</h1>
        <div class="col-md-4">
          <Form />
        </div>
        <Drink />
      </div>
    </div>
  )
}

// EXAMPLE OF CHILDREN PROP THING
// <LoadSubreddit>
//   <WaitIndicator />
// </LoadSubreddit>

export default App
