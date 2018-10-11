import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import User from './components/user'

import Chat from './components/chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <h3 class=" text-center">Messaging</h3>
          <div class="messaging">
          
            <Chat/>

            <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>

          </div></div>
      </div>
    );
  }
}

export default App;
