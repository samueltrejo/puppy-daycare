import React from 'react';

import Navbar from '../components/navbar';
import Auth from '../components/auth';
// import Home from '../components/home';

import './App.scss';

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {

  }

  render() {
    // const { authed } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Auth />
      </div>
    );
  }
}

export default App;
