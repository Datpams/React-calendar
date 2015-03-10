import React from 'react';
import Week from './Week';
import Day from './Day';
import Select from './Select';

export default React.createClass({
  render: function() {
    return(
      <div className='cal'>
        <Week/>
        <Day/>
        <Select/>
      </div>
    )
  }
});
