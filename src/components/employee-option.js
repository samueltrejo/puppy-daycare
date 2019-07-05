import React from 'react';

class EmployeeOption extends React.Component {
  optionClickEvent = () => {
    const { employeeOption, selectOption } = this.props;
    selectOption('employee', employeeOption);
  }

  render() {
    const { employeeOption } = this.props;
    return (
      <button className="dropdown-item" type="button" onClick={this.optionClickEvent}>{employeeOption}</button>
    );
  }
}

export default EmployeeOption;
