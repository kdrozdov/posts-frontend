import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import * as PostActions from '../actions/PostActions'

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    user_id: state.auth.id,
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
