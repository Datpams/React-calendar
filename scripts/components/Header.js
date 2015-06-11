//Importing react component
import React from 'react';

//Exporting
export default React.createClass({
  render() {
    return (
      //Regular navbar code nothing special other than its materialize
      <div className="top">
        <div className="navbar-fixed">
          <nav className="blue accent-4" style={{height: 90}}>
            <div className="nav-wrapper">
              <a href="http://everestps.github.io/third/" className="brand-logo center">Homepage</a>
              <ul className="right-hide-on-med-and-down">
                <li><a href="http://everestps.github.io/third/tick.html">Tick tack toe</a></li>
                <li><a href="http://everestps.github.io/third/calc.html">Calculator</a></li>
                <li><a href="http://everestps.github.io/third/vind.html">Vindinium</a></li>
                <li><a href="https://smtcs-chat.herokuapp.com/">React chat</a></li>
                <li><a href="http://everestps.github.io/third/about.html">About me</a></li>
                <li><a href="http://everestps.github.io/third/hardware.html">Hardware</a></li>
                <li><a href="http://everestps.github/io/third/html.html">HTML</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});
