import React,{useState} from 'react'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from './context';

const MovieCard = ({id, name, url, rating, description}) => {

  const [show, setShow] = useState(false)

  const {deleteMovie} = useGlobalContext()

  const history = useHistory()

  const feedbackShow = {
    display: show ? 'block' : 'none'
  }

  const ratingColor = {
    color: rating > 3.5 ? 'green' : 'red',
    fontWeight: '900'
  }

  const expandMoreStyle = {
    transform: !show ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'all 0.5s ease'
  }

  const[favorite, setFavorite] = useState(true)

  return(
    <>
    <Card className="movie-card">
      <img className="movie-poster" src={url} alt={name} />
      <CardContent>
        <div className="movieName-div">
          <div className="movie-head">
            <h3 className="movie-name">{name} <IconButton onClick={()=>{console.log(id);history.push(`/movielist/${id}`)}}><InfoOutlinedIcon></InfoOutlinedIcon></IconButton> </h3>
            <IconButton onClick={()=>{setShow(!show)}}>
              <ExpandMoreIcon style={expandMoreStyle} />
            </IconButton>
          </div>
          <div className="rating" style={ratingColor}>
              <Stack spacing={1}>
                <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
              </Stack>
              {rating}/5
          </div>
          <div className="feedback-div" style={feedbackShow}>
            <p>{description}</p>
            <p><b>Found this helpful?</b></p>
            <div className="like-dislike-div">
              <LikeButton />
              <DislikeButton />
              <IconButton onClick={()=>deleteMovie(id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing className='addFavourite'>
        <IconButton aria-label="add to favorites" color='error' onClick={()=>setFavorite(!favorite)}>
          <FavoriteIcon/>
        </IconButton>
        {favorite ? 'Add to Favourites' : 'Remove from Favourites'}
      </CardActions>
    </Card>
    </>
  )
}

export default MovieCard
