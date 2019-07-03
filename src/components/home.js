import React from 'react';

import dogsData from '../helpers/data/dogs-data';
import staffData from '../helpers/data/staff-data';

import DogPen from './dog-pen';
import StaffRoom from './staff-room';

class Home extends React.Component {
  state = {
    dogs: [],
    staff: [],
    // walks: [],
  }

  getDogs = () => {
    dogsData.getDogsData()
      .then(dogs => this.setState({ dogs }))
      .catch(error => console.error(error));
  }

  getStaff = () => {
    staffData.getStaffData()
      .then(staff => this.setState({ staff }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getDogs();
    this.getStaff();
  }

  render() {
    const { dogs, staff } = this.state;
    return (
      <div className="Home">
        <DogPen dogs={dogs} />
        <StaffRoom staff={staff} />
      </div>
    );
  }
}

export default Home;
