import React from 'react';
import './Quiz.css';

const option = ['a) E=m2c', 'b) E=mc2', 'c) E=mc', 'd) E=m/c'];

const Quiz = () => {
  return (
    <div className='quiz_box'>
      <h2 className='h2_heading'>SCIENCE QUIZ</h2>
      <div className='image_box'>
      <img className='question_image' src='https://thumbs.dreamstime.com/z/surprise-albert-einstein-stand-question-mark-136009956.jpg'/>
      <div className='question_box'>
      <span className='question'>
        What is the Einten's energy conservation ?
      </span>
      {option.map((cval) => {
        return <span className='options'>{cval}</span>;
      })}
</div>
</div>
<div className='response'>
<span className='submit_button'>SUBMIT</span>
<span className='cancel_button'>CANCEL</span>
<span className='skip_button'>SKIP</span></div>

  </div>
  );
};

export default Quiz;
