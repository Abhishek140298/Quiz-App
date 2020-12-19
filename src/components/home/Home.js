import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuizData } from '../../action/QuizDataAction';

const Home = (props) => {
  useEffect(() => {
    props.getQuizData();
  }, []);
  
  return (
    
    <div className='main_box'>
      <h1>Check Your Knowldege</h1>
      <h4>Select Your Quiz On The Bases Of Your Knowldge</h4>

      {props.quizData.map((cval) => {
        return (
          <Link to={{pathname:`/quiz/${cval.id}`}}>
            <div className='select_quiz_box'>{cval.quizName}</div>
          </Link>
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ QuizReducer }) => {
  const { quizData, isLoading } = QuizReducer;
  return { quizData, isLoading };
};

export default connect(mapStateToProps, { getQuizData })(Home);
