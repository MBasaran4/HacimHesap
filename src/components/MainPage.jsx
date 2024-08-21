import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

function MainPage() {
  return (
    <div>
        <div className='header'>
            <Navbar/>
        </div>
        <div className='body'>
            <Body/>
        </div>
    </div>
  )
}

export default MainPage
