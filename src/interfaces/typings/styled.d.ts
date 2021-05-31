import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      alt1: string
      grey: string
      light: string
      error: string
      primary: string
      success: string
    }
  }
}
