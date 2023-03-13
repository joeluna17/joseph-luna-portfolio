import { createTheme } from '@mui/material/styles'

// Update the Button's color prop options
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    appPrimary: PaletteColor
    appSecondary: PaletteColor
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    appPrimary?: PaletteColorOptions
    appSecondary: PaletteColorOptions
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    appPrimary: true
    appSecondary: true
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    appPrimary: true
    appSecondary: true
  }
}

export const theme = createTheme({
  palette: {
    appPrimary: {
      main: '#38d8d6',
    },
    appSecondary: {
      main: '#f17300',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1.2rem',
          color: '#fff',
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: '#f2eee9',
    },
    body1: {
      fontSize: '1.4rem',
    },
  },
})
