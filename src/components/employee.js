import React from 'react';

class Employee extends React.Component {
  render() {
    const { staff } = this.props;
    return (
      <div className="goat col-12 col-lg-6 col-xl-4 p-5">
        <div className="card">
          <div className="card-img-top text-center">
            <img src={staff.image} className="img-fluid" alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{staff.name}</h5>
            <p className="card-text">{staff.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
