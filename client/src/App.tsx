import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AppNavBar from './AppNavBar';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';



const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Column */}
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

      {/* Middle Column */}
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
          <Typography variant="h5">Middle Column</Typography>
          {/* Posts will go here */}
        </Box>
      </Box>

      {/* Right Column */}
      <Box
        sx={{
          // bgcolor: 'bg200.main',
          border: '1px solid',
          borderColor: 'bg300.main',
          flex: 1,
          overflowY: 'auto',
          p: 2,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        

{/* Search Box */}

        <TextField
          id="outlined-helperText"
          label="Search"
          variant="outlined"
          defaultValue="Default Value"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            },
          }}
        />



<Box
sx={{
  bgcolor: 'bg100.main',
  borderRadius: 2,
  p: 2,
  mb: 2,
  border: '1px solid',
  borderColor: 'bg300.main',
}}
>
<Typography variant="h6" fontWeight="bold" gutterBottom>
  Who to Follow
</Typography>

{/* Placeholder User 1 */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  <Box sx={{ fontSize: 32, mr: 2 }}>🎨</Box>
  <Box>
    <Typography variant="subtitle1" fontWeight="bold">
      @placeholderuser1
    </Typography>
    <Typography variant="body2" color="text.secondary">
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </Typography>
  </Box>
</Box>

{/* Placeholder User 2 */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  <Box sx={{ fontSize: 32, mr: 2 }}>🎨</Box>
  <Box>
    <Typography variant="subtitle1" fontWeight="bold">
      @placeholderuser2
    </Typography>
    <Typography variant="body2" color="text.secondary">
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </Typography>
  </Box>
</Box>

{/* Placeholder User 3 */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  <Box sx={{ fontSize: 32, mr: 2 }}>🎨</Box>
  <Box>
    <Typography variant="subtitle1" fontWeight="bold">
      @placeholderuser3
    </Typography>
    <Typography variant="body2" color="text.secondary">
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </Typography>
  </Box>
</Box>

{/* placeholders */}
</Box>


        
      </Box>
    </Box>
  );
};

export default App;
