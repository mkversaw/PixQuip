import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppNavBar from './AppNavBar';
import MainFeed from './MainFeed';

const FeedColumn = () => {
return (
    <Box
    sx={{
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    {/* Navbar only in middle */}
    <AppNavBar></AppNavBar>

    {/* Scrollable Middle Content */}
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        p: 2,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <MainFeed /> {/* <- Here you render the post feed */}
    </Box>
  </Box>
);
};

export default FeedColumn;