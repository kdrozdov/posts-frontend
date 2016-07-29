import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import PostList from './containers/PostList'
import Post from './containers/Post'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PostList}/>
        <Route path="posts/:id" component={Post}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
