import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="navbar-fixed" style={{marginBottom: 50}}>
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Calander</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});
