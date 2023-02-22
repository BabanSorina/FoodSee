import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
const VideoCard = ({ item, index }) => {
    return (
       
            <a style={{textDecoration:"none"}}
                key={index}
                
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
            >
                <Card width="300px" sx={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)", borderRadius: "22% 45% 32% 40% / 41% 33% 33% 35% ", backgroundColor: "#ebfaa2", padding: "3rem" }}>
                    <CardMedia>
                        <img style={{ borderRadius: '20px', width:"300px",height:"200px" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                    </CardMedia>
                    <CardContent>
                        <Box>
                            <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} fontWeight={600} color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography fontSize="14px" color="#000">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </CardContent>





                </Card>
            </a>
       


    )
}

export default VideoCard