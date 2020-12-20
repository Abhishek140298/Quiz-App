import React from 'react';
import './Score.css';
import {Link} from 'react-router-dom'
const Score = (props) => {
  return (
    <div className='score_div'>
      <h1 clasName='score_head'>Your score is {props.score}</h1>
		<Link to ='/'>	<div className='back_button'>BACK</div></Link>
    </div>
  );
};

export default Score;
