import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore() {
  const loggerMiddleware = createLogger()

  const store = createStore(rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
