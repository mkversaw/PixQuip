import React from 'react';
import { Box } from '@mui/material';
import QuipPost from './QuipPost';

const samplePosts = [
  {
    profileImageUrl: 'https://via.placeholder.com/40',
    username: 'Place holder user 1',
    date: 'May 4, 2025',
    content: 'Place holder text 1',
    images: ['https://picsum.photos/200/300'],
  },
  {
    profileImageUrl: 'https://via.placeholder.com/40',
    username: 'Place holder user 2',
    date: 'May 3, 2025',
    content: 'Place holder text 2',
    images: [],
  },
  {
    profileImageUrl: 'https://via.placeholder.com/40',
    username: 'Place holder user 3',
    date: 'May 2, 2025',
    content: 'Place holder text 3',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/200'],
  },
];

const MainFeed = () => {
  return (
    <Box sx={{ px: 2 }}>
      {samplePosts.map((post, idx) => (
        <QuipPost key={idx} {...post} />
      ))}
    </Box>
  );
};

export default MainFeed;