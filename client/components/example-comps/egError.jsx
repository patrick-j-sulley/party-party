import React from 'react'
import { connect } from 'react-redux'

function ErrorMessage (props) {
  return (
    <div className='error'>
      {props.errorMessage}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
