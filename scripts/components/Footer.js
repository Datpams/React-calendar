//Importing react component
import React from 'react';

//Exporting
export default React.createClass({
  render: function() {
    return (
      //Regular footer code nothing special
      <footer className="main white bg-blue">
        <div className="px2 py3 container">
          <div className="clearfix mxn2">
            <div className="col col-6 md-col-3">
              <ul className="list-reset">
                <li>
                  <h3 className="h4 m0">
                    <a className="button block button-transparent" href="/">Home</a>
                  </h3>
                </li>
                <li><a className="button block button-transparent" href="http://everestps.github.io/third/tick.html">Tick tack toe</a></li>
                <li><a className="button block button-transparent" href="http://everestps.github.io/third/calc.html">Calculator</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});
