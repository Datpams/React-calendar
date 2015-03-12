//Importing react component
import React from 'react';

//Exporting
export default React.createClass({
  render: function() {
    return (
      //Regular footer code nothing special
      <footer className="blue lighten-2 page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Calender</h5>
              <p className="grey-text text-lighten-4">This is a calender created using react</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="blue waves-effect wave-light btn grey-text text-lighten-3" href="https://github.com/Dleavenworth/React-calendar">GitHub page</a></li>
                <li><a className="blue waves-effect wave-light btn grey-text text-lighten-3" href="http://facebook.github.io/react/">React</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2015 Copyright David Leavenworth III
          </div>
        </div>
      </footer>
    );
  }
});
