import React from 'react';
import Header from './components/Header';
import Week from './components/Week';
import Day from './components/Day';
import Cal from './components/Cal'
import Select from './components/Select';
import Footer from './components/Footer'
import Side from './components/Side'

window.calenderData = {};
require('./style.css');

const App = React.createClass({
  render() {
    return (
      <div className='app'>
        <Header/>
        <Side/>
        <Cal/>
      </div>
    );
  }
});

export default App;
