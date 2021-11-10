import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const DislikeButton = () => {
  const [dislike, setDislike] = useState(0)

  return(
    <IconButton className="like-dislike-btn" onClick={()=>{setDislike(dislike - 1)}}>
      <Badge badgeContent={dislike} color="error" className="thumb-color">
        <ThumbDownIcon />
      </Badge>
    </IconButton>
  )
}

export default DislikeButton
