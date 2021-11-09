import React,{useState} from "react";
import './index.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function App() {
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
      <article className="container form-wrapper">
          <form>
            <div className="form-control">
              <TextField label='Movie Name' placeholder='Enter Movie Name' id="movieName" name="name" value={singleMovie.name} onChange={handleChange} multiline variant="standard" />
            </div>
            <div className="form-control">
              <TextField label='Image URL' placeholder='Enter Image URL' id="movieURL" name="url" value={singleMovie.url} onChange={handleChange} multiline variant="standard" />
            </div>
            <div className="form-control">
              <TextField label='Description' placeholder='Enter Description' id="description" name="description" value={singleMovie.description} onChange={handleChange} multiline variant="standard" />
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
            <Button variant="contained" size="medium" onClick={handleSubmit} type="submit">Add Movie</Button>
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
  );
}

const MovieCard = ({movieName, moviePoster, rating, description}) => {
  const despTruncate = (string, n) => {
    return string?.length > n ? string.substr(0,n-1) + '...' : string
}

  const [show, setShow] = useState(false)

  const feedbackShow = {
    display: show ? 'block' : 'none'
  }

  const ratingColor = {
    color: rating > 3.5 ? 'green' : 'red',
    fontWeight: '900'
  }

  return(
    <>
    <div className="movie-card">
      <img className="movie-poster" src={moviePoster} alt={movieName} />
      <div className="movieName-div">
        <h2 className="movie-name">{movieName}</h2>
        <div className="rating" style={ratingColor}>
            <Stack spacing={1}>
              <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
            </Stack>
            {rating}/5
        </div>
        <p>{despTruncate(description, 100)}</p>
        <p onClick={()=>{setShow(!show)}} className='feedback-option'>{show ? 'Hide feedback...' : 'Show feedback...'}</p>
        <div className="feedback-div" style={feedbackShow}>
          <p><b>Found this helpful?</b></p>
          <div className="like-dislike-div">
            <LikeButton />
            <DislikeButton />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const LikeButton = () => {
  const [like,setLike] = useState(0)
  
  return(
    <button className="like-dislike-btn" onClick={()=>{setLike(like + 1)}}>Like 👍 {like}</button>
  )
}

const DislikeButton = () => {
  const [dislike, setDislike] = useState(0)

  return(
    <button className="like-dislike-btn" onClick={()=>{setDislike(dislike - 1)}}>Dislike 👎 {dislike}</button>
  )
}

export default App;
