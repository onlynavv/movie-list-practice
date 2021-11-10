import React,{useState} from 'react'
import MovieCard from './MovieCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const MovieList = () => {
    const movieList = [
  {
    id:1,
    name:'The Amazing Spiderman',
    url: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg',
    rating: 4,
    description:'The Amazing Spider-Man follows the origin story of Peter Parkers beginnings as the world-renowned wall-crawler'
  },
  {
    id:2,
    name:'Spiderman Far From Home',
    url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    rating: 4.5,
    description:'In the film, Parker is recruited by Nick Fury (Jackson) and Mysterio (Gyllenhaal) to face the Elementals while he is on a school trip to Europe.'
  },
  {
    id:3,
    name:'Jungle Cruise',
    url: 'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    rating: 5,
    description: 'Based on Disneylands theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.'
  }
];

const [singleMovie, setSingleMovie] = useState({name:'', url:'', rating:'', description:''})
  const [movieDetails, setMovieDetails] = useState(movieList)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
    setSingleMovie({...singleMovie, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovieDetails = {...singleMovie, id: new Date().getTime().toString()}
    setMovieDetails([...movieDetails, newMovieDetails])
    setSingleMovie({name:'', rating:'', url:'', description:''})
  }
    return (
        <div className="App">
          <div className="main-heading">
            <h1>Movie List</h1>
          </div>
          <>
            <article className="container">
                <form className="form-wrapper">
                  <div className="form-control">
                    <TextField className="userInput" label='Movie Name' placeholder='Enter Movie Name' id="movieName" name="name" value={singleMovie.name} onChange={handleChange} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Image URL' placeholder='Enter Image URL' id="movieURL" name="url" value={singleMovie.url} onChange={handleChange} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Description' placeholder='Enter Description' id="description" name="description" value={singleMovie.description} onChange={handleChange} multiline variant="standard" />
                  </div>
                  
                  <div className="form-control">
                    <Stack spacing={1}>
                      <Rating
                        name="rating"
                        value={singleMovie.rating}
                        onChange={handleChange} precision={0.5}
                      />
                    </Stack>
                  </div>
                  <Button className="submitBtn" variant="contained" size="medium" onClick={handleSubmit} type="submit">Add Movie</Button>
                </form>
            </article>
            <div className="container">
              {movieDetails.map((item)=>{
                const {name, url, rating, description,id} = item
                return <MovieCard key={id} movieName = {name} moviePoster = {url} rating={rating} description={description}/>
              })}
            </div>
          </>
        </div>
    )
}

export default MovieList
