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
    var pageWidth = $(window).width();
    var week_style = {
      width: pageWidth/7
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
    return (
      <p>Placeholder</p>
    );
  }
})

var Select = React.createClass({
  render: function() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div class="input-field col s12">
              <input id="Content" type="text" className="validate">
                <label for="Content">Content</label>
              </div>
            </div>
          </form>
        </div>
        );
        } 
        })

        var Cal = React.createClass({
          render: function() {
            return(
              <Week/>
              <Day/>
              <Select/>
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
