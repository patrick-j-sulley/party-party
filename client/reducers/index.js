import { combineReducers } from 'redux'

import waiting from './waiting'
import cocktails from './cocktails'
import userName from './userName'

export default combineReducers({
  waiting,
  cocktails,
  userName,
})
