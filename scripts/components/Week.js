import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
  render() {
    var currentDate = '2015-01-01T00:00:00.000Z'
    // var currentDate = new Date()
    var dayNodes = []
    //January
    for(var i = 0; i < 31; i++) {
      dayNodes.push(<Day className="col day" date={moment(currentDate).add(i,'day').utc().format('MM-DD-YYYY')} desc='Description'/>)
      if(i = 1) {
        dayNodes.push(<a name="jan"></a>)
      }
    }
    for(var i = 31; i < 59; i++) {
      dayNodes.push(<Day className="col day" date={moment(currentDate).add(i,'day').utc().format('MM-DD-YYYY')} desc='Description'/>)
      if(i = 32) {
        dayNodes.push(<a name="feb"></a>)
      }
    }
    return (
      <div className="container main row">
        {dayNodes}
      </div>
    );
  }
})
