import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    appPrimary: Palette['appPrimary']
    appSecondary: Palette['appSecondary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    appPrimary?: PaletteOptions['appPrimary']
    appSecondary: PaletteOptions['appSecondary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    appPrimary: true
    appSecondary: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    appPrimary: Palette['appPrimary']
    appSecondary: Palette['appSecondary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    appPrimary?: PaletteOptions['appPrimary']
    appSecondary: PaletteOptions['appSecondary']
  }
}

// Update the AppBar color prop options
declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    appPrimary: true
    appSecondary: true
  }
}

export const theme = createTheme({
  palette: {
    appPrimary: {
      // main: '#054a91',
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
