import React from 'react';

import DogPen from './dog-pen';
import dogData from '../helpers/data/dogs-data';
import StaffRoom from './staff-room';
import staffData from '../helpers/data/staff-data';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <DogPen dogs={dogData} />
        <StaffRoom staff={staffData} />
      </div>
    );
  }
}

export default Home;