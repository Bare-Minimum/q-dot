

import React from 'react';

const CustomerNav = () => (
    <div className="customer-nav-bar">
      <nav>
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
        <div className="nav-wrapper">
          <ul className="nav-mobile hide-on-med-and-down">
            <li><a className="dropdown-button" href="#!" data-activates="dropdown1">q.<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
);

export default CustomerNav;