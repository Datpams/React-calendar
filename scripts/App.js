//Importing all the componets that will be bundled into app and rendering them
import React from 'react';
import Header from './components/Header';
import Week from './components/Week';
import Day from './components/Day';
import Cal from './components/Cal'
import Footer from './components/Footer'
import Side from './components/Side'

window.calenderData = {};
require('./style.css');
//Rendering all of the components
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
