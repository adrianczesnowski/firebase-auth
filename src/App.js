import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileView from './views/ProfileView/ProfileView';
import SignUpView from './views/SignUpView/SignUpView';
import LoginView from './views/LoginView/LoginView';
import ForgotPasswordView from './views/ForgotPasswordView/ForgotPasswordView';
import UpdateProfileView from './views/UpdateProfileView/UpdateProfileView';
import StartView from './views/StartView/StartView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={StartView} />
              <PrivateRoute path="/profile" component={ProfileView} />
              <Route path="/signup" component={SignUpView} />
              <Route path="/login" component={LoginView} />
              <Route path="/forgot-password" component={ForgotPasswordView} />
              <Route path="/update-profile" component={UpdateProfileView} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
