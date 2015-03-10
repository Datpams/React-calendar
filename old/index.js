var dates = [
  {
    id: 1,
    date: moment(),
    name: 'test'
  }
];

var Header = React.createClass({
  render: function() {
    return (
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Calander</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

var Week = React.createClass({
  render: function() {
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

var Day = React.createClass({
  render: function() {
    var now = moment().utc().toISOString();
    var style = {
      width: $(window).width() / 7
    };

    return (
      <div className="day" style={style}>
        <p>{this.props.day}</p>
        <div className="desc">
          {this.props.desc}
        </div>
      </div>
    );
  }
})

var Select = React.createClass({
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
<<<<<<< Updated upstream:old/index.js
=======
              <i className="mdi-action-view-headline"></i>
              <input id="textarea1" type="text" className="text validate"></input>
>>>>>>> Stashed changes:index.js
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

var Cal = React.createClass({
  render: function() {
    return(
      <div className='cal'>
        <Week/>
        <Day day='teuseday'/>
        <Select/>
      </div>
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="blue lighten-2 page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Calender</h5>
              <p className="grey-text text-lighten-4">This is a calender created using react</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="blue waves-effect wave-light btn grey-text text-lighten-3" href="https://github.com/Dleavenworth/React-calendar">GitHub page</a></li>
                <li><a className="blue waves-effect wave-light btn grey-text text-lighten-3" href="http://facebook.github.io/react/">React</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2015 Copyright David Leavenworth III
          </div>
        </div>
      </footer>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <Header/>
        <Cal/>
        <Footer/>
      </div>
    )
  }
});

React.render(<App/>, document.body);
