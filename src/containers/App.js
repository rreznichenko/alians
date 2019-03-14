import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/header';
import Main from "./main/main";
import Game from "./game/game";
import Config from "./config/config";
import Page404 from "./page404/page404";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/config"  component={Config} />
            <Route path="/game"  component={Game} />
            <Route  component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
