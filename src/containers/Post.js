import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/Post'
import * as PostActions from '../actions/PostActions'

const mapStateToProps = (state) => {
  return state.posts.post
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
