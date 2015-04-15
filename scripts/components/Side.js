//Importing react component
import React from 'react';

//Exporting
export default React.createClass({
  render() {
    return(
      //Rendering sidebar with anchor tags for user convinence
      <div className="left">
      <nav className="sidenav flex-first">
        <ul className="list-reset mt2 mb2">
          <li><a href="#01" className="caps date button-transparent">January</a></li>
          <li><a href="#02" className="caps date button-transparent">Febuary</a></li>
          <li><a href="#03" className="caps date button-transparent">March</a></li>
          <li><a href="#04" className="caps date button-transparent">April</a></li>
          <li><a href="#05" className="caps date button-transparent">May</a></li>
          <li><a href="#06" className="caps date button-transparent">June</a></li>
          <li><a href="#07" className="caps date button-transparent">July</a></li>
          <li><a href="#08" className="caps date button-transparent">August</a></li>
          <li><a href="#09" className="caps date button-transparent">September</a></li>
          <li><a href="#10" className="caps date button-transparent">October</a></li>
          <li><a href="#11" className="caps date button-transparent">November</a></li>
          <li><a href="#12" className="caps date button-transparent">December</a></li>
        </ul>
      </nav>
    </div>
    );
  }
});
