import React, { useState } from 'react';
import { 
    Box, 
    Button,
    Typography,
    InputAdornment,
    TextField,
 } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchFollowColumn = () => {
return (
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

);
};

export default SearchFollowColumn;