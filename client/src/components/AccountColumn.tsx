import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const AccountColumn = () => {
return (
    <Box
        sx={{
            // bgcolor: 'bg200.main',
            border: '1px solid',
            borderColor: 'bg300.main',
            flex: 1,
            overflowY: 'auto',
            p: 2,
            // hide scroll bars:
            scrollbarWidth: 'none', // Firefox
            '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}
    >
        <Typography variant="h5">Get in the loop</Typography>
        
        <Button variant="contained">Create Account</Button>
        <Button variant="outlined">Sign in</Button>

    </Box>
);
};

export default AccountColumn;