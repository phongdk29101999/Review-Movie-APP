import React from 'react';
import '../../../app.css';
import { Button } from '../../utils/button/Button';
import './Welcome.css';

function Welcome() {
  return (
    <div className='welcome-container'>
      <iframe 
        src="https://www.youtube.com/embed/KCSNFZKbhZE?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=KCSNFZKbhZE" 
        title="Avengers: End Game" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
      {/* <video src={} autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='welcome-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('test button')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Welcome;