import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <Day date={moment().utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(1,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(2,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(3,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(4,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(5,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
        <Day date={moment().add(6,'day').utc().format('MM-DD-YYYY')} desc='Description'/>
      </div>
    );
  }
})
