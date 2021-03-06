import React from 'react';

class Walk extends React.Component {
  prepareEditForm = () => {
    this.props.prepareEditForm(this.props.walk.id, this.props.walk.date, this.props.dog.name, this.props.employee.name);
  };

  deleteWalk = () => {
    this.props.deleteWalk(this.props.walk.id);
  }

  render() {
    const { walk, dog, employee } = this.props;
    return (
      <div className="Walk col-12 col-lg-6 col-xl-4 p-5">
        <div className="card">
          <div className="card-img-top text-center d-flex">
            <img src={employee.image} className="img-fluid w-50" alt="" />
            <img src={dog.image} className="img-fluid w-50" alt="" />
          </div>
          <div className="card-body">
            <div className="d-flex">
              <h5 className="card-title pr-2">{walk.date}</h5>
              <i className="cursor-pointer fas fa-edit pr-2" data-toggle="modal" data-target="#add-walk-form" onClick={this.prepareEditForm}></i>
              <i className="cursor-pointer fas fa-trash" onClick={this.deleteWalk}></i>
            </div>
            <p className="card-text">{`${employee.name} to walk ${dog.name} on ${walk.date}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
