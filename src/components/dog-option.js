import React from 'react';

class DogOption extends React.Component {
  optionClickEvent = () => {
    const { dogOption, selectOption } = this.props;
    selectOption('dog', dogOption);
  }

  render() {
    const { dogOption } = this.props;
    return (
      <button className="dropdown-item" type="button" onClick={this.optionClickEvent}>{dogOption}</button>
    );
  }
}

export default DogOption;
