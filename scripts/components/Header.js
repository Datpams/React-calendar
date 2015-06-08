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
              <ul id="nav-mobile" className="right-hide-on-med-and-down">
                <li><a href="http://everestps.github.io/third/tick.html">Tick tack toe</a></li>
                <li><a href="http://everestps.github.io/third/calc.html">Calculator</a></li>
                <li><a href="http://everestps.github.io/third/vind.html">Vindinium</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});
