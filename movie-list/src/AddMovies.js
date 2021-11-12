import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useGlobalContext } from './context';
import './AddMovies.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AddMovies = () => {
    const [singleMovie, setSingleMovie] = useState({name:'', url:'', rating:'', description:'',trailer:''})

    const {handleSubmit} = useGlobalContext()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name,value)
        setSingleMovie({...singleMovie, [name]:value})
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const newMovieDetails = {...singleMovie, id: new Date().getTime().toString()}
    //     setMovieDetails([...movieDetails, newMovieDetails])
    //     setSingleMovie({name:'', rating:'', url:'', description:''})
    // }
    return (
        <div>
            <article className="container add-movie-wrapper">
              <Card>
                <CardContent>
                <form className="form-wrapper">
                  <div className="form-control">
                    <TextField className="userInput" label='Movie Name' placeholder='Enter Movie Name' id="movieName" name="name" value={singleMovie.name} onChange={handleChange} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Image URL' placeholder='Enter Image URL' id="movieURL" name="url" value={singleMovie.url} onChange={handleChange} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Trailer URL' placeholder='Enter Trailer URL' id="trailerURL" name="trailer" value={singleMovie.trailer} onChange={handleChange} multiline variant="standard" />
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
                  <Button className="submitBtn" variant="contained" size="medium" onClick={(e)=>handleSubmit(e,singleMovie, setSingleMovie)} type="submit">Add Movie</Button>
                </form>
                </CardContent>
                </Card>
            </article>
        </div>
    )
}

export default AddMovies
