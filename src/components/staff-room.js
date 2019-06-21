import React from 'react';

import Employee from './employee';

class StaffRoom extends React.Component {
  render() {
    const { staff } = this.props;
    const createStaff = staff.map(employee => (
      <Employee key={employee.id} staff={employee} />
    ));
    return (
      <div>
        <div className="display-4 text-center">Staff</div>
        <div id="staff" className="d-flex flex-wrap">
          { createStaff }
        </div>
      </div>
    );
  }
}

export default StaffRoom;
