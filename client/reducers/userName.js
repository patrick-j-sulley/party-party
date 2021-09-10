import { ADD_USER } from '../actions'

function userName(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return action.userName
    default:
      return state
  }
}

export default userName
