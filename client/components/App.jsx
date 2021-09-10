import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Drink from './Drink'
import LoadingIndicator from './LoadingIndicator'

function App({ username }) {
  const drinkIsSubmitted = typeof username !== "object"

  const [nextScreen, setNextScreen] = useState(<LoadingIndicator />)

  useEffect(() => {
    if (drinkIsSubmitted) {
      setTimeout(() => {
        setNextScreen(<Drink />)
      }, 5000)
    }
  }, [username])

  return (
    <div className='container appcontainer'>
      {drinkIsSubmitted ? nextScreen : <Form />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.userName
  }
}

export default connect(mapStateToProps)(App)
