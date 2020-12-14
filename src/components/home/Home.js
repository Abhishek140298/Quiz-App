import React from 'react';
const quizType = ['Science Quiz', 'Mathematics Quiz', 'General Knowldege Quiz'];
const Home = () => {
  return (
    <div className='main_box'>
      <h1>Check Your Knowldege</h1>
      
        {quizType.map((cval) => {
          return <div className='select_quiz_box'>{cval}</div>;
        })}
    
    </div>
  );
};

export default Home;
