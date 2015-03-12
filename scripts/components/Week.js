import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
  render() {
    var initialDate = '2015-01-01T00:00:00.000Z';
    var dayNodes = [];
    var monthIDSet = true;
    var currentMonth = 01;
    for(var i = 0; i < 365; i++) {
      var currentDate = moment(initialDate).add(i, 'day').toISOString();
      var month = moment(currentDate).format('MM');
      if(monthIDSet) {
        dayNodes.push(<Day key={i} className="col day" id={month} date={moment(currentDate).utc().format('MM-DD-YYYY')} desc='Description'/>);
        monthIDSet = false;
        currentMonth = month;
      } else {
        dayNodes.push(<Day key={i} className="col day" date={moment(currentDate).utc().format('MM-DD-YYYY')} desc='Description'/>);
      }
    }
    return (
      <div className="container main row">
        {dayNodes}
      </div>
    );
  }
})
