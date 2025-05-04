import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AppNavBar from './components/AppNavBar';
import AccountColumn from './components/AccountColumn';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import MainFeed from './components/MainFeed';
import SearchFollowColumn from './components/SearchFollowColumn';
import FeedColumn from './components/FeedColumn';


const App: React.FC = () => {
return (
    <Box sx={{ 
      display: 'flex',
      height: '100vh',
      overflow: 'hidden' 
    }}
    >

    {/* Left Column */}
    <AccountColumn></AccountColumn>

    {/* Middle Column */}
    <FeedColumn></FeedColumn>

    {/* Right Column */}
    <SearchFollowColumn></SearchFollowColumn>

    </Box>
);
};

export default App;
