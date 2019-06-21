import React from 'react';

import DogPen from '../components/dog-pen';
import dogsData from '../data/dogs-data';
import StaffRoom from '../components/staff-room';
import staffData from '../data/staff-data';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    staff: [],
  }

  componentDidMount() {
    this.setState({ dogs: dogsData, staff: staffData });
  }

  render() {
    const { dogs } = this.state;
    const { staff } = this.state;
    return (
      <div className="App">
        <DogPen dogs={dogs}/>
        <StaffRoom staff ={staff}/>
      </div>
    );
  }
}

export default App;
