import React from 'react';
import $ from 'jquery';

import walksData from '../helpers/data/walks-data';

import DogOption from './dog-option';
import EmployeeOption from './employee-option';
import Walk from './walk';

class Walklist extends React.Component {
  state = {
    walks: [],
    dogOption: 'choose a dog',
    employeeOption: 'choose an employee',
    dateInput: '',
  }

  saveDateInput = (event) => {
    this.setState({ dateInput: event.target.value });
  }

  getWalks = () => {
    walksData.getWalksData()
      .then(walks => this.setState({ walks }))
      .catch(error => console.error(error));
  };

  selectOption = (dropDown, option) => {
    if (dropDown === 'dog') {
      this.setState({ dogOption: option });
    } else if (dropDown === 'employee') {
      this.setState({ employeeOption: option });
    }
  }

  saveWalk = (event) => {
    event.preventDefault();
    const { dogOption, employeeOption, dateInput } = this.state;
    const { dogs, staff } = this.props;
    const walk = {
      dogId: dogs.find(dogCopy => dogCopy.name === dogOption).id,
      employeeId: staff.find(employeeCopy => employeeCopy.name === employeeOption).id,
      date: dateInput,
    };
    $('#add-walk-form').modal('hide');
    walksData.addWalk(walk)
      .then(() => this.getWalks())
      .catch(error => console.error(error));
  }

  componentDidMount() {
    $('#add-walk-form').on('hidden.bs.modal', () => {
      this.setState({ dogOption: 'choose a dog', employeeOption: 'choose an employee' });
      $('#walk-date-input').val('');
    });

    this.getWalks();
  }

  componentWillUnmount() {
    $('#add-walk-form').off('hidden.bs.modal');
  }

  render() {
    const {
      walks,
      dogOption,
      employeeOption,
    } = this.state;
    const { dogs, staff } = this.props;
    const dogOptions = dogs.map(dog => (
      <DogOption key={dog.id} dogOption={dog.name} selectOption={this.selectOption} />
    ));
    const employeeOptions = staff.map(employee => (
      <EmployeeOption key={employee.id} employeeOption={employee.name} selectOption={this.selectOption} />
    ));
    const printWalks = walks.map((walk) => {
      if (dogs.length && staff.length) {
        const dog = dogs.find(dogCopy => dogCopy.id === walk.dogId);
        const employee = staff.find(employeeCopy => employeeCopy.id === walk.employeeId);
        return <Walk key={walk.id} walk={walk} dog={dog} employee={employee} />;
      }
      return [];
    });
    return (
      <div className="Walklist">
        <div className="display-4 text-center">Walklist</div>
        <div className="d-flex flex-wrap">
          {printWalks}
        </div>

        <div className="modal" id="add-walk-form">
          <div className="modal-dialog">
            <div className="modal-content rounded-0 border-0">
              <div className="modal-header border-0 pb-0">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fas fa-times"></i>
                </button>
              </div>
              <h1 className="display-4 m-auto">Add Walk</h1>
              <div className="modal-body">

                <div className="d-flex pt-3">
                  <label>Dog: </label>
                  <div className="dropdown pl-3" onLoad={this.getDogOptions}>
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dog-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {dogOption}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dog-dropdown">
                      {dogOptions}
                    </div>
                  </div>
                </div>

                <div className="d-flex pt-3">
                  <label>Employee: </label>
                  <div className="dropdown pl-3">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="employee-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {employeeOption}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="employee-dropdown">
                      {employeeOptions}
                    </div>
                  </div>
                </div>

                <input id="walk-date-input" type="text" className="form-control mt-3" placeholder='Add Date/Time' onKeyUp={this.saveDateInput}/>
              </div>
              <div className="modal-footer justify-content-center border-0">
                <button id="add-movie" type="button" className="btn btn-dark rounded-0 px-4" onClick={this.saveWalk}>Save Walk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Walklist;
