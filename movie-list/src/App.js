import React from "react";
import './index.css'

function App() {
  const movieList = [
  {
    name:'The Amazing Spiderman',
    url: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg'
  },
  {
    name:'Spiderman Far From Home',
    url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'
  },
  {
    name:'Jungle Cruise',
    url: 'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'
  },
  {
    name:'Adjustment Bureau',
    url: 'https://m.media-amazon.com/images/M/MV5BMzc0ZDcwZTYtOWUzZi00NDE4LWI4NjgtMWVjZTUyYTA2ZTNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
  },
  {
    name:'Murder Mystery',
    url: 'https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SX300.jpg'
  },
  {
    name:'Knives Out',
    url: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg'
  },
  {
    name:'The Guilty',
    url: 'https://m.media-amazon.com/images/M/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'
  },
  {
    name:'Radius',
    url: 'https://m.media-amazon.com/images/M/MV5BYWEyYzk5ZGQtYTNiYi00OWZmLTk2YzItODZhYTY2ZmY2ZDE4XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg'
  },
  {
    name: 'Back to the future III',
    url: 'https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  }
];
  return (
    <div className="App">
      <div className="main-heading">
        <h1>Movie List</h1>
      </div>
      <div className="container">
        {movieList.map((item)=>{
          const {name,url} = item
          return <MovieCard movieName = {name} moviePoster = {url}/>
        })}
      </div>
    </div>
  );
}

const MovieCard = ({movieName, moviePoster}) => {
  return(
    <div className="movie-card">
      <img className="movie-poster" src={moviePoster} alt={movieName} />
      <div className="movieName-div">
        <h2 className="movie-name">{movieName}</h2>
      </div>
    </div>
  )
}

export default App;
