import React from 'react';

import DogPen from '../components/dog-pen';
import dogsData from '../data/dogs-data';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: dogsData });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <DogPen dogs={dogs}/>
      </div>
    );
  }
}

export default App;
