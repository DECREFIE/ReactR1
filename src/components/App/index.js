import React from 'react';
import { withFirebase } from '../Firebase';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { withAuthentication } from '../Session';
import { AuthUserContext } from '../Session';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';


import * as ROUTES from '../../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    }),
  }
  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
       <AuthUserContext.Provider value={this.state.authUser}>
const App = () => (
  <Router>
    <div>
      <Navigation />
      <Navigation authUser={this.state.authUser} />
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
</AuthUserContext.Provider>
););
  }
}
export default withAuthentication(App);
