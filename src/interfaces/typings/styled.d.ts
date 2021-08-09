import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      alt1: string
      alt2: string
      alt3: string
      grey: string
      light: string
      error: string
      primary: string
      success: string
    }
    breakpoints: {
      md: string
      xl: string
    }
  }
}
