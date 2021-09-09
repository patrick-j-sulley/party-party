import React from 'react'

import Form from './Form'
import Drink from './Drink'

function App() {
  // bit of a title

  return (
    <div className='mx-auto'>
      
      <div className="row align-items-start">
        <div className="col">
        </div>
        <div className="col">
          <h1 className="text-center mt-3 p-4 border">Let's get this party started!!</h1>
          <Form />
          <Drink />
        </div>
        <div className="col">
        </div>
      </div>
      
    </div>
  )
}

// EXAMPLE OF CHILDREN PROP THING
// <LoadSubreddit>
//   <WaitIndicator />
// </LoadSubreddit>

export default App
