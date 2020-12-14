import React from 'react';
import Home from './components/home/Home';
import {Switch,Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <>
      <Switch>
        <Route path='/' exact component={Home}/>
        
        </Switch>
      </>
    );
  }
}
