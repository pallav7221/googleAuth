import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import {GoogleLogin , GoogleLogout}from 'react-google-login';
import { gapi } from 'gapi-script';




function App() {
  
  const onSuccess = response => {
    console.log('SUCCESS', response);
  };
  const onFailure = response => {
    console.log('FAILED', response);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "72702126253-gk8cjqhtn4spj35a336earhlej9b3i8d.apps.googleusercontent.com",
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);
  return (
    <div className="App">
    
      <GoogleLogin
        clientId="72702126253-gk8cjqhtn4spj35a336earhlej9b3i8d.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId={"72702126253-gk8cjqhtn4spj35a336earhlej9b3i8d.apps.googleusercontent.com"}

        onLogoutSuccess={onLogoutSuccess}

      />
    </div>
  );
}

export default App;
