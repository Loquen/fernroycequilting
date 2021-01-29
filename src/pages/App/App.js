import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/ContactPage';
import EventPage from '../EventPage/EventPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import LecturePage from '../LecturePage/LecturePage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import UploadPage from '../UploadPage/UploadPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      images: [
        '4starstring.jpg',
        'asilomarbeach.jpg',
        'britishsuffragistmedallion.jpg',
        'churndash-with-bits.jpg',
        'corduroytumbler.jpg',
        'criss-cross-string-finished.jpg',
        'daughterofspikes.jpg',
        'doublecross-string-full.jpg',
        'gwennysbaskets.jpg',
        'logcabinvillage.jpg',
        'marchingladies.jpg',
        'offcentermedallion.jpg',
        'pencilstringstar.jpg',
        // 'seanscullywooly.jpg',
        'thatred.jpg',
        'tinylogcabins.jpg',
        'together.jpg',
        'useyourwords.jpg',
        'vintagestar.jpg'
      ]
    };
  }

  /*********** H E L P E R S  ***********/

  getYear = () => {
    return new Date().getFullYear();
  }

  /*********** L O G I N / S I G N U P ***********/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render(){
    return (
      <div className="App" id='bootstrap-override'>
        <img className="banner-image" src="background.jpg" alt="red banner quilt" />
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
            <HomePage />
          }/>
          <Route exact path='/about' render={() => 
            <AboutPage />
          }/>
          <Route exact path='/contact' render={() => 
            <ContactPage />
          }/>
          <Route exact path='/event' render={() => 
            <EventPage 
              user={this.state.user}
            />
          }/>
          <Route exact path='/gallery' render={() => 
            <GalleryPage 
              images={this.state.images}
            />
          }/>
          <Route exact path='/lecture' render={() => 
            <LecturePage 
              user={this.state.user}
            />
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
        <Footer getYear={this.getYear}/>
      </div>
    );
  }
}

export default App;
