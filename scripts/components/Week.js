import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
  render() {
    var initialDate = '2015-01-01';
    var dayNodes = [];
    var currentMonth = 1;
    for(var i = 0; i < 365; i++) {
      var currentDate = moment(initialDate).add(i, 'day')
      var month = moment(currentDate).format('M');
      if(currentMonth !== month) {
        dayNodes.push(<Day key={i} className="col day" id={month} date={moment(currentDate).utc().format('MM-DD-YYYY')} desc='Description'/>);
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
