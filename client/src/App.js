import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Switch>
          <Route path="/"><Projects /></Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
