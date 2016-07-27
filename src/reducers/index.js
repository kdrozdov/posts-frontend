import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './postForm'

const rootReducer = combineReducers({
  posts,
  postForm
})

export default rootReducer
