import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './SingleMovie.css'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from './context';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

const SingleMovie = () => {

    const [movie,setMovie] = useState('')

    const { data } = useGlobalContext()

    const {id} = useParams()

    const history = useHistory()

    useEffect(()=>{
        const newMovie = data.find((item)=>{
            return item.id == id
        })
        setMovie(newMovie)
    }, [id,data])

    const {description, name, trailer} = movie

    return (
        <section className='single-movie'>
            <Card className='singleMovie-wrapper'>
                <div className='trailer-div'>
                    <iframe width="853" height="360" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <CardContent>
                    <div className='movie-details'>
                        <div className='detils-head'>
                            <h3>{name}</h3>
                            {/* <Stack spacing={1}>
                                <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                            </Stack> */}
                        </div>
                        <p>{description}</p>
                        <Button onClick={()=>{history.goBack()}}>Go Back</Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default SingleMovie
