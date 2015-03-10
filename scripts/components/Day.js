import React from 'react';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {desc: localStorage.getItem(this.props.date) || this.props.desc}
  },
  handleSubmit(e) {
    e.preventDefault()
    this.refs.form.getDOMNode().style.display = 'none';
  },
  handleChange(e) {
    localStorage.setItem(this.props.date, e.target.value);
    this.setState({desc:e.target.value})
  },
  unhideForm(e) {
    e.preventDefault()
    this.refs.form.getDOMNode().style.display = 'block'
  },
  render() {
    var now = moment().utc().toISOString();
    var style = {
      width: ($(window).width() - 0) / 7,
      WebkitUserSelect: 'none'
    };
    return (
      <div className="blue lighten-4 day col" style={style} onDoubleClick={this.unhideForm}>
        <div className="desc" onDoubleClick={this.handleClick}>
          <p>{this.state.desc}</p>
          <p>{moment(this.props.date).format('MMMM Do YYYY')}</p>
        </div>
        <form style={{display:'none'}} ref='form' onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col">
              <label for="textarea1">Description</label>
              <input ref='desc' type="text"
                className="text validate" value={this.state.desc}
                onChange={this.handleChange}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
})
