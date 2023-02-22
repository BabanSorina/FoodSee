import React from 'react'
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import VideoCard from './VideoCard';
const HorizontalScroll = ({videos}) => {
console.log(videos)
  return (
   <ScrollMenu>
     {videos?.filter((item) => {return item.video })?.map((item,index) => (
                <Box key={item.id || item}
                    title={item.id || item}
                    m="1rem 40px"
                >
                   <VideoCard key={index} item={item} index={index}/>
                </Box>))}
               
    

   </ScrollMenu>)
}

export default HorizontalScroll