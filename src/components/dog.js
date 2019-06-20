import React from 'react';

class Dog extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="goat col-3 p-5">
        <div className={'card' + `bg${dog.color}`}>
          <img src={dog.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.characteristic}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
