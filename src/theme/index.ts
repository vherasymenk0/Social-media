import Typography from '~/theme/typography'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      main: '#4E5D78',
      light: '#717D93',
    },
    secondary: {
      main: '#377DFF',
    },
    success: {
      main: '#4bb34b',
    },
    grey: {
      A700: '#F9FAFB',
      A400: '#F6F7F8',
      A200: '#979EAC',
    },
  },
  typography: { ...Typography },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export type ThemeType = typeof theme
export default theme
