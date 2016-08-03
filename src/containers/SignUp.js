import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import * as SignUpActions from '../actions/SignUpActions'

const mapStateToProps = (state) => {
  return state.signup
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SignUpActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
