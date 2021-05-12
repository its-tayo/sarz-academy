import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const GlobalStyle = createGlobalStyle`
html,
body, #__next {
 ${tw`h-full`}
}

body {
 font-size: 16px;
 ${tw`antialiased`}
}
`
