import React from "react";
import ColorBox from "./ColorBox";
import './index.css'
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
 
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movielist'>
          <MovieList />
        </Route>
        <Route path='/colorbox'>
          <ColorBox />
        </Route>
      </Switch>
    </Router>
  )

}



export default App;
