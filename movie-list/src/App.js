import React from "react";
import ColorBox from "./ColorBox";
import './index.css'
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Home from './Home'
import SingleMovie from "./SingleMovie";
import AddMovies from "./AddMovies";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
 
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/films'>
          <Redirect to='/movielist' />
        </Route>
        <Route path='/movielist/:id'>
          <SingleMovie />
        </Route>
        <Route path='/movielist'>
          <MovieList />
        </Route>
        <Route path='/addmovies'>
          <AddMovies />
        </Route>
        <Route path='/colorbox'>
          <ColorBox />
        </Route>
        <Route path='**'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )

}



export default App;
