import React from 'react';

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault()
    console.log(this.refs.desc.getDOMNode().value)
    this.refs.out.getDOMNode().innerHTML = this.refs.desc.getDOMNode().value.trim()
  },
  render: function() {
    return (
      <div className="row">
      <p ref='out'></p>
      </div>
    );
  }
})
