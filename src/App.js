import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Modules/Home';
import FourOhFour from './Modules/FourOhFour';
import Skills from './Modules/Skills';
import Projects from './Modules/Projects';
import Contact from './Modules/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
