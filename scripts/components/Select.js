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
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label for="textarea1">Description</label>
              <input ref='desc' id="textarea1" type="text" className="text validate"></input>
            </div>
          </div>
        </form>
        <p ref='out'></p>
      </div>
    );
  }
})
