import React from 'react';
import moment from 'moment';

export default React.createClass({
  render: function() {
    var now = moment().utc().toISOString();
    var style = {
      width: $(window).width() / 7
    };

    return (
      <div className="day" style={style}>
        <p>{this.props.day} {now}</p>
        <div className="desc">
          {this.props.desc}
        </div>
      </div>
    );
  }
})
