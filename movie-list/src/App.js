import React from "react";
import './index.css'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'

function App() {
  const movieList = [
  {
    name:'The Amazing Spiderman',
    url: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg',
    rating: 4,
    description:'The Amazing Spider-Man follows the origin story of Peter Parkers beginnings as the world-renowned wall-crawler'
  },
  {
    name:'Spiderman Far From Home',
    url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    rating: 4.5,
    description:'In the film, Parker is recruited by Nick Fury (Jackson) and Mysterio (Gyllenhaal) to face the Elementals while he is on a school trip to Europe.'
  },
  {
    name:'Jungle Cruise',
    url: 'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    rating: 5,
    description: 'Based on Disneylands theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.'
  },
  {
    name:'Adjustment Bureau',
    url: 'https://m.media-amazon.com/images/M/MV5BMzc0ZDcwZTYtOWUzZi00NDE4LWI4NjgtMWVjZTUyYTA2ZTNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    rating: 3,
    description: 'Starring Matt Damon, Emily Blunt, Anthony Mackie, John Slattery, and Terence Stamp, the film tells the story of a United States congressman who discovers that what appear to be chance events in his life are controlled by a mysterious, powerful group.'
  },
  {
    name:'Murder Mystery',
    url: 'https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SX300.jpg',
    rating: 3.5,
    description: 'Murder Mystery is a 2019 American comedy mystery film directed by Kyle Newacheck and written by James Vanderbilt. The film stars Adam Sandler, Jennifer Aniston, and Luke Evans, and follows a married couple who is caught up in a murder investigation on a billionaires yacht.'
  },
  {
    name:'Knives Out',
    url: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg',
    rating: 4,
    description: 'Knives Out follows the story of a detective who investigates the death of a family patriarch during a gathering. Harlan Thrombey, a popular mystery novelist, calls his entire family to his Massachusetts mansion to celebrate his 85th birthday. However, the next morning, Harlan is found dead with his throat slit.'
  },
  {
    name:'The Guilty',
    url: 'https://m.media-amazon.com/images/M/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    rating: 5,
    description: 'Directed by Antoine Fuqua and starring Jake Gyllenhaal, The Guilty is one of those taut, one-location thrillers. The actor plays the role of a harried, irascible Los Angeles cop who is dealing with an unspecified violent incident that occurred months ago. It resulted in him being relegated to desk duty.'
  },
  {
    name:'Radius',
    url: 'https://m.media-amazon.com/images/M/MV5BYWEyYzk5ZGQtYTNiYi00OWZmLTk2YzItODZhYTY2ZmY2ZDE4XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg',
    rating: 4.5,
    description: 'It stars Diego Klattenhoff, Charlotte Sullivan, and Brett Donahue. Klattenhoff and Sullivan play two survivors of a car accident who discover that one causes the death of anyone who comes within a certain radius of him, and the other has the ability to nullify this effect.'
  },
  {
    name: 'Back to the future III',
    url: 'https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    rating: 4,
    description: 'The film continues immediately following Back to the Future Part II (1989); while stranded in 1955 during his time travel adventures, Marty McFly (Fox) discovers that his friend Dr. Emmett "Doc" Brown (Lloyd), trapped in 1885, was killed by Buford "Mad Dog" Tannen (Wilson), Biffs great-grandfather.'
  }
];
  return (
    <div className="App">
      <div className="main-heading">
        <h1>Movie List</h1>
      </div>
      <div className="container">
        {movieList.map((item)=>{
          const {name,url, rating, description} = item
          return <MovieCard movieName = {name} moviePoster = {url} rating={rating} description={description}/>
        })}
      </div>
    </div>
  );
}

const MovieCard = ({movieName, moviePoster, rating, description}) => {
  const despTruncate = (string, n) => {
    return string?.length > n ? string.substr(0,n-1) + '...' : string
}
  return(
    <div className="movie-card">
      <img className="movie-poster" src={moviePoster} alt={movieName} />
      <div className="movieName-div">
        <h2 className="movie-name">{movieName}</h2>
        <div className="rating">
          {[1,2,3,4,5].map((star)=>{
            console.log(rating)
                return(
                    <>
                    <span>{rating + 1 === star + 0.5 ? <FaStarHalfAlt className='star-color' /> : rating >= star ? <FaStar className='star-color' /> : <FiStar className='star-color' />}</span>
                    </>
                )
            })}
        </div>
        <p>{despTruncate(description, 100)}</p>
      </div>
    </div>
  )
}

export default App;
