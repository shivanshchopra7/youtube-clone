import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

 const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);
 const { id } = useParams();
 console.log(ChannelDetail, videos)
useEffect(() => {
fetchFromAPI(`channels?part=snippet&id=${id}`)
.then((data) => setChannelDetail(data?.items[0]) );

fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
.then((data) => setVideos(data?.items) );
}, [id] )
 return(
  <Box minHeight="96vh">
<Box>
  <div 
  style={{
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 100%, rgba(0,212,255,1) 100%)',
    zIndex: 10,
    height: '150px'
  }} />
  <ChannelCard channelDetail={ChannelDetail} marginTop="-93px" />
  
</Box>
<Box display="flex" justifyContent="center" p="2">
<Box maxWidth="950px" width="100%" sx={{ mr: { sm: '100px' } }}>
<Videos videos={videos} />
</Box>
</Box>
  </Box>
 )
}

export default ChannelDetail;