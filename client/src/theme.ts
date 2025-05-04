// src/theme.ts
import { createTheme } from '@mui/material/styles';

// EXTEND the MUI palette types
declare module '@mui/material/styles' {
    interface Palette {
        bg100: Palette['primary'];
        bg200: Palette['primary'];
        bg300: Palette['primary'];
        accent100: Palette['primary'];
        accent200: Palette['primary'];
    }
    
    interface PaletteOptions {
        bg100?: PaletteOptions['primary'];
        bg200?: PaletteOptions['primary'];
        bg300?: PaletteOptions['primary'];
        accent100?: PaletteOptions['primary'];
        accent200?: PaletteOptions['primary'];
    }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
        main: '#ff0b55',
        light: '#ff5e81',
        dark: '#ed1e54',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#ed1e54',
        light: '#ffcde1',
    },
    background: {
        default: '#13131b',
        paper: '#21222a',
    },
    text: {
        primary: '#ffffff',
        secondary: '#e0e0e0',
    },
    bg100: {
        main: '#13131b',
    },
    bg200: {
        main: '#21222a',
    },
    bg300: {
        main: '#393942',
    },
    accent100: {
        main: '#ed1e54',
    },
    accent200: {
        main: '#ffcde1',
    },
  },
});

export default theme;
