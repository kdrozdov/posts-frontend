import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TestButton from '../components/TestButton'
import * as PostActions from '../actions/PostActions'

const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestButton)
