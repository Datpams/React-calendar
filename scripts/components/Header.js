//Importing react component
import React from 'react';

//Exporting
export default React.createClass({
  render() {
    return (
      //Regular navbar code nothing special other than its materialize
      <div className="top">
        <nav className="clearfix white bg-blue" style={{height: 90}}>
          <div className="sm-col">
            <a className="button py2 button-transparent" href="http://everestps.github.io/third/tick.html">Tick tack toe</a>
            <a className="button py2 button-transparent" href="http://everestps.github.io/third/calc.html">Calculator</a>
          </div>
          <div className="sm-col-right">
            <a className="button py2 button-transparent" href="http://everestps.github.io/third/">Home</a>
          </div> 
        </nav>
      </div>
        );
        }
        });
