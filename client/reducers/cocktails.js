import { RECEIVE_COCKTAIL } from '../actions'

function cocktails(state = [], action) {
  switch (action.type) {
    case RECEIVE_COCKTAIL:
      return action.cocktail
    default:
      return state
  }
}

export default cocktails
