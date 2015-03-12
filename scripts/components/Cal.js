//Importing componets
import React from 'react';
import moment from 'moment';
import Week from './Week';
import Day from './Day';
//Exporting cal componet
export default React.createClass({
  render() {
    return(
      //Rendering Week componet inside a div
      <div className='cal'>
      <Week/>
      </div>
    )
  }
});
