import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string
      primary: string
    }
  }
}
