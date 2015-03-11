import React from 'react';
import Header from './components/Header';
import Cal from './components/Cal'
import Footer from './components/Footer'
require('./style.css')

export default React.createClass({
  render() {
    return (
      <div className='app'>
        <Header/>
        <Cal/>
        <Footer/>
      </div>
    );
  }
})
