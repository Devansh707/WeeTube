import { Link } from 'react-router-dom'; // to navigate through video   
import { Typography, Card, CardContent, CardMedia } from '@mui/material'; // for video thumbnail
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl  } from '../utils/constants'; // in cases we are unable to fetch the proper data that receive then we simply show some data

const VideoCard = ({ video : { id : {videoId}, snippet } }) => {    // de-structuring the video object to get videoId and snippet
     
  return (
    <Card sx = {{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow:'10', borderRadius:'20px' }} >
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                 image = {snippet?.thumbnails?.high?.url} 
                 alt = {snippet?.title}
                 sx = {{width: { xs: '100%', sm: '358px', md:'320px'}, height: 180}}
            />   
        </Link>
        <CardContent sx = {{ backgroundColor : '#1d1514', height: '106px'}}  >
            <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant = "subtitle1" fontWeight = "bold" color="#fff" fontFamily="-moz-initial" >
                    {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60) }
                </Typography>
            </Link>
            <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant = "subtitle2"  color="gray" fontWeight = "bold"  >
                    {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60) }
                    <CheckCircle sx={{fontSize : 12, color: 'gray', ml : '5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard