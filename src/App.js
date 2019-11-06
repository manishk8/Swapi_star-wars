import React from 'react';
import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
