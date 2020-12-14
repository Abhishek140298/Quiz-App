import React from 'react';
import './Home.css'

const quizType = ['Science Quiz', 'Mathematics Quiz', 'General Knowldege Quiz'];
const Home = () => {
  return (
    <div className='main_box'>
      <h1>Check Your Knowldege</h1>
      <h4>Select Your Quiz On The Bases Of Your Knowldge</h4>
      
        {quizType.map((cval) => {
          return <div className='select_quiz_box'>{cval}</div>;
        })}
    
    </div>
  );
};

export default Home;
