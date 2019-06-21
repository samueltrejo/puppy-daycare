import React from 'react';

import Dog from './dog';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const createDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="puppies-container">
        <div className="display-4 text-center">Puppies</div>
        <div id="puppies" className="d-flex flex-wrap">
          { createDogs }
        </div>
      </div>
    );
  }
}

export default DogPen;
