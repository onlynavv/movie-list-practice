import React,{useState} from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const LikeButton = () => {
  const [like,setLike] = useState(0)
  
  return(
    <IconButton className="like-dislike-btn" onClick={()=>{setLike(like + 1)}}>
      <Badge badgeContent={like} color="primary" className="thumb-color">
        <ThumbUpIcon />
      </Badge>
    </IconButton>
  )
}

export default LikeButton
