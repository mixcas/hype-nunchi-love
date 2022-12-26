import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow, lightBlue } from '@mui/material/colors';

import App from '@/components/App';

const theme = createTheme({
  // palette: {
    // primary: {
      // main: yellow[400],
      // light: '#ffff8b',
      // dark: '#c9bc1f',
      // contrastText: '#212121',
    // },
    // secondary: {
      // main: lightBlue[100],
      // light: '#e6ffff',
      // dark: '#82b3c9',
      // contrastText: '#212121',
    // },
    // black: {
      // main: '#212121',
    // },
  // },
    palette: {
    type: 'dark',
    primary: {
      main: '#ffee58',
      light: '#ffff8b',
      dark: '#c9bc1f',
    },
    secondary: {
      main: '#b3e5fc',
      light: '#e6ffff',
      dark: '#82b3c9',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffa726',
    },
    success: {
      main: '#66bb6a',
    },
    semiblack: {
      main: '#212121',
    },
  },
  overrides: {
    MuiAppBar: {
    },
  },
  components: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiAppBar: {
      defaultProps: {
        color: 'semiblack',
      },
      styleOverrides: {
        colorInherit: {
          backgroundColor: '#689f38',
          color: '#fff',
        },
      }
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['Helvetica', 'Arial', 'sans-serif'].join(','),
    stroked: {
      fontFamily: ['Rubik', 'serif'].join(','),
      fontStyle: 'italic',
      fillColor: '#000000',
      textStrokeColor: '#000000',
      strokeWidth: '2px',
      fontWeight: '900',
      '-webkit-text-fill-color': '#00000000',
      '-moz-text-stroke-color': '#000',
      '-webkit-text-stroke-color': '#000',
      '-moz-text-stroke-width': '2px',
      '-webkit-text-stroke-width': '2px',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
