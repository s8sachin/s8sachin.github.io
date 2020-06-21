import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Modules/Home';
import FourOhFour from './Modules/FourOhFour';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
