import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Typography,
    IconButton,
    Grid,
} from '@mui/material';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // reply
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // like
import RepeatIcon from '@mui/icons-material/Repeat'; // repost
import DrawIcon from '@mui/icons-material/Draw'; // quip

type QuipPostProps = {
    profileImageUrl: string;
    username: string;
    date: string;
    content: string;
    images?: string[];
};

const QuipPost: React.FC<QuipPostProps> = ({
    profileImageUrl,
    username,
    date,
    content,
    images = [],
  }) => {
    return (
      <Box
        sx={{
          bgcolor: 'bg100.main',
          border: '1px solid',
          borderColor: 'bg300.main',
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar src={profileImageUrl} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
              @{username}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>
  
        {/* Content */}
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ mb: images.length ? 2 : 1 }}
        >
          {content}
        </Typography>
  
        {/* Images */}
        {images.length > 0 && (
          <Grid container spacing={1} sx={{ mb: 1 }}>
            {images.map((src, index) => (
              <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                <Box
                  component="img"
                  src={src}
                  alt={`post-img-${index}`}
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    maxHeight: 200,
                    objectFit: 'cover',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
  
        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
          <IconButton sx={{ color: 'text.secondary' }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <RepeatIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <DrawIcon />
          </IconButton>
        </Box>
      </Box>
    );
};
  
export default QuipPost;