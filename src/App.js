import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/Common.module.css';
import './css/Gallery.module.css';
import './css/site.css'
import Login from './Components/Login';

export const loginData = {
  username: '',
  password: '',
  state: 'LOGIN_DEFAULT',
  updatedAt: new Date(),
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login login={{...loginData}}  />
      </header>
    </div>
  );
}

export default App;
