import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import * as AuthActions from '../actions/AuthActions'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
