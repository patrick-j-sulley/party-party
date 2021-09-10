import React from 'react'

import Form from './Form'
import Drink from './Drink'
import LoadingIndicator from './LoadingIndicator'

function App() {
  // bit of a title

  return (
    <div className="container appcontainer">
      <Form />
      <Drink />
      {/* <LoadingIndicator/> */}
    </div>
  )
}

// EXAMPLE OF CHILDREN PROP THING
// <LoadSubreddit>
//   <WaitIndicator />
// </LoadSubreddit>

export default App
