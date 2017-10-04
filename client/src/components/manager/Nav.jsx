import React from 'react';
import StatusSwitch from './StatusSwitch.jsx';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-default justify-content-end">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">q.</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <StatusSwitch status={props.status} switchStatus={props.switchStatus.bind(this)}/>
          <button className="btn btn-danger navbar-btn">Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;