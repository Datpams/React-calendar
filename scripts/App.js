import React from 'react';
import Header from './components/Header';
import Week from './components/Week';
import Day from './components/Day';
import Cal from './components/Cal'
import Select from './components/Select';
import Footer from './components/Footer'

<<<<<<< Updated upstream
window.calenderData = {};
=======
require('./style.css');
>>>>>>> Stashed changes

const App = React.createClass({
  render() {
    return (
      <div className='app'>
        <Header/>
        <Cal/>
      </div>
    );
  }
});

export default App;
