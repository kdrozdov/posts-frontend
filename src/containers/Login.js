import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import * as AuthActions from '../actions/AuthActions'

const mapStateToProps = (state) => {
  return state.auth
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
