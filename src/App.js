import React from 'react';
import Home from './components/home/Home';
import {Switch,Route} from 'react-router-dom'
import Quiz from './components/quiz/Quiz';


export default class App extends React.Component {
  render() {
    return (
      <>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/quiz' exact component={Quiz}/>
        </Switch>
      </>
    );
  }
}
