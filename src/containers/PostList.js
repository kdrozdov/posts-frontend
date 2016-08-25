import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PostList from '../components/PostList'
import * as PostActions from '../actions/PostActions'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
    user_id: state.auth.id,
    totalPages: state.posts.totalPages,
    isFetching: state.posts.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    query: ownProps.location.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList))
