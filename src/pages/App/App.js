import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import EventPage from '../EventPage/EventPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import LecturePage from '../LecturePage/LecturePage';
import NavBar from '../../components/NavBar/NavBar';
import UploadPage from '../UploadPage/UploadPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  /*********** L O G I N / S I G N U P *************/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render(){
    return (
      <div className="App">
        <NavBar 
          location={window.location.pathname}
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() => 
            <AboutPage />
          }/>
          <Route exact path='/contact' render={() => 
            <ContactPage />
          }/>
          <Route exact path='/event' render={() => 
            <EventPage />
          }/>
          <Route exact path='/gallery' render={() => 
            <GalleryPage />
          }/>
          <Route exact path='/lecture' render={() => 
            <LecturePage />
          }/>
          <Route exact path='/upload' render={() => 
            userService.getUser() ?           
              <UploadPage
                user={this.state.user}
              />
            :
              <Redirect to='/login' />
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;
