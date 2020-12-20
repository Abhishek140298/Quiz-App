import React, { useEffect, useState } from 'react';
import './Quiz.css';
import { connect } from 'react-redux';
import { getQuizData } from '../../action/QuizDataAction';

const Quiz = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [optionColor, setOptionColor] = useState('');
  const [spanId, setSpanId] = useState(-1);
  const [score,setScore]=useState(0)
  


  useEffect(() => {
    props.getQuizData();
  }, []);
  const perPage = 1;
  const offset = perPage * currentPage;
  const questions = props.quizData[props.match.params.id].q_a;

  const changeCurrentPage = () => {
    if (currentPage < 9) {
      return setCurrentPage(currentPage + 1);
    }
  };
  const reduceCurrentPage = () => {
    if (currentPage > 0) {
      return setCurrentPage(currentPage - 1),setSpanId(-1)
    }
  };
  const optionSelect = (e) => {
    return setOptionColor('#008000	'), setSpanId(e.target.id);
  };
  const onClickSubmit=()=>{
    if(spanId===questions[currentPage].correctAnswer){
      return setScore(score+1),console.log("score",score),setCurrentPage(currentPage+1),setSpanId(-1) }
      else{
        return setCurrentPage(currentPage+1,setSpanId(-1))
      }
     
  }
 
  return (
    <div className='quiz_box'>
      <h2 className='h2_heading'>SCIENCE QUIZ</h2>
      <div className='image_box'>
        <img
          className='question_image'
          src='https://media.istockphoto.com/vectors/question-mark-and-brain-like-quiz-concept-of-quizz-time-mind-vector-id962650244'
        />
        <div className='question_box'>
          {questions.slice(offset, offset + perPage).map((cval) => {
            return (
              <>
                <span className='question'>{cval.question}</span>
                {cval.options.map((s_cval, index) => {
                  return (
                    <span
                      className='options'
                      id={index}
                      style={
                        spanId== index ? { backgroundColor: optionColor } : null
                      }
                      onClick={optionSelect}
                    >
                      {s_cval}
                    </span>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className='response'>
        <span className='submit_button' onClick={onClickSubmit}>SUBMIT</span>
        <span className='cancel_button' onClick={reduceCurrentPage}>
          CANCEL
        </span>
        <span className='skip_button' onClick={changeCurrentPage}>
          SKIP
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ QuizReducer }) => {
  const { quizData, isLoading } = QuizReducer;
  return { quizData, isLoading };
};

export default connect(mapStateToProps, { getQuizData })(Quiz);
