import React from 'react'
import MovieCard from './MovieCard';
import { useGlobalContext } from './context';

const MovieList = () => {

    const {data} = useGlobalContext()
  
    return (
        <div className="App">
          <div className="main-heading">
            <h1>Movie List</h1>
          </div>
          <>
            <div className="container">
              {data.map((item)=>{
                const {id} = item
                return <MovieCard key={id} {...item}/>
              })}
            </div>
          </>
        </div>
    )
}

export default MovieList
