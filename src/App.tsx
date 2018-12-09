import React from 'react';
import './App.css';
import logo from './logo.svg';
import Test from './Test';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Test></Test>
      </div>
    );
  }
}

export default App;
