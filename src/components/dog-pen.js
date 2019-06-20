import React from 'react';

import Dog from './dog';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const createDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="d-flex flex-wrap">
        { createDogs }
      </div>
    );
  }
}

export default DogPen;
