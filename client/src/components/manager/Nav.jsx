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
          <li className="active"><a href="#">Manager Home Page</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <StatusSwitch status={props.status} switchStatus={props.switchStatus.bind(this)}/>
          <button className="btn btn-danger navbar-btn" onClick={e => location.href = '/logout'}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
