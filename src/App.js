import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import MintPage from './pages/mintpage/mintpage.component';

import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header /> 
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/313' component={HomePage}></Route>
        <Route path='/mint' component={MintPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
