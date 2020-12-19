import React, { useEffect } from 'react';
import './Quiz.css';
import { connect } from 'react-redux';
import { getQuizData } from '../../action/QuizDataAction';

const option = ['a) E=m2c', 'b) E=mc2', 'c) E=mc', 'd) E=m/c'];

const Quiz = (props) => {
  useEffect(() => {
    props.getQuizData();
  }, []);
  
  const questions=props.quizData[props.match.params.id].q_a;
  console.log("question",questions)
  return (
    <div className='quiz_box'>
      <h2 className='h2_heading'>SCIENCE QUIZ</h2>
      <div className='image_box'>
        <img
          className='question_image'
          src='https://media.istockphoto.com/vectors/question-mark-and-brain-like-quiz-concept-of-quizz-time-mind-vector-id962650244'
        />
        <div className='question_box'>
          
          {questions.map((cval) => {
            return( <>          <span className='question'>
          {cval.question}
          </span>
          {cval.options.map((s_cval) =>{return <span className='options'>{s_cval}</span>})}</>);
          })}
        </div>
      </div>
      <div className='response'>
        <span className='submit_button'>SUBMIT</span>
        <span className='cancel_button'>CANCEL</span>
        <span className='skip_button'>SKIP</span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ QuizReducer }) => {
  const { quizData, isLoading } = QuizReducer;
  return { quizData, isLoading };
};

export default connect(mapStateToProps, { getQuizData })(Quiz);
