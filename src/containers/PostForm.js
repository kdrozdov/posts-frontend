import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import * as PostActions from '../actions/PostActions'
import * as PostFormActions from '../actions/PostFormActions'

const mapStateToProps = (state) => {
  return state.postForm;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...PostActions, ...PostFormActions },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
