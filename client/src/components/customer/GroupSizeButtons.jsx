import React from 'react';

class GroupSizeButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="row-center">
        <div className="customer-group-buttons">
        <h4>Select your group size</h4>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">face</i>solo</a>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">face</i>2</a>
          <br />
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">face</i>3 - 4</a>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">face</i>5 +</a>
        </div>
      </div>
    )
  }
};

export default GroupSizeButtons;