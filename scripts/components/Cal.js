import React from 'react';
import moment from 'moment';
import Week from './Week';
import Day from './Day';
import Select from './Select';

export default React.createClass({
  render() {
    return(
      <div className='grey darken-4 cal'>
        <Week/>
        <Select/>
      </div>
    )
  }
});
