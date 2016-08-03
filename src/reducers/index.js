import { combineReducers } from 'redux'
import posts from './posts'
import auth from './auth'
import signup from './signup'

const rootReducer = combineReducers({
  posts,
  auth,
  signup
})

export default rootReducer
