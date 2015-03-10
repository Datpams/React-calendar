import React from 'react';
import moment from 'moment';

export default React.createClass({
  render() {
    var week_style = {
      width: document.body.clientWidth/7
    }
    return (
      <div className="row">
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().format('MMMM Do YYYY')}
          <p className='day'>Sun</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(1, 'days').format('MMMM Do YYYY')}
          <p className='day'>Mon</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(2, 'days').format('MMMM Do YYYY')}
          <p className='day'>Tues</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(3, 'days').format('MMMM Do YYYY')}
          <p className='day'>Wed</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(4, 'days').format('MMMM Do YYYY')}
          <p className='day'>Thrus</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(5, 'days').format('MMMM Do YYYY')}
          <p className='day'>Fri</p>
        </div>
        <div className="date blue lighten-3 col" style={week_style}>
          {moment().add(6, 'days').format('MMMM Do YYYY')}
          <p className='day'>Sat</p>
        </div>
      </div>
    );
  }
})
