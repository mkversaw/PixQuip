import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const AppNavbar: React.FC = () => {
  const [selected, setSelected] = useState<'latest' | 'greatest'>('latest');

  return (
    <AppBar
      position="relative"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'background.paper',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', minHeight: 48 }}>
        <Box sx={{ display: 'flex', width: '50%', justifyContent: 'center' }}>
          {/* Latest posts button/label */}
          <Box
            onClick={() => setSelected('latest')}
            sx={{
              flex: 1,
              textAlign: 'center',
              cursor: 'pointer',
              py: 1,
              borderBottom: selected === 'latest' ? '3px solid' : 'none',
              borderColor: selected === 'latest' ? 'primary.main' : 'transparent',
              color: selected === 'latest' ? 'primary.main' : 'text.primary',
              transition: 'all 0.3s ease',
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Latest
            </Typography>
          </Box>

          {/* Hot posts button/label */}
          <Box
            onClick={() => setSelected('greatest')}
            sx={{
              flex: 1,
              textAlign: 'center',
              cursor: 'pointer',
              py: 1,
              borderBottom: selected === 'greatest' ? '3px solid' : 'none',
              borderColor: selected === 'greatest' ? 'primary.main' : 'transparent',
              color: selected === 'greatest' ? 'primary.main' : 'text.primary',
              transition: 'all 0.3s ease',
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Greatest
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
