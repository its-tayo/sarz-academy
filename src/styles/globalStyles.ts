import { createGlobalStyle } from 'styled-components'
import { transparentize, linearGradient } from 'polished'
import tw from 'twin.macro'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'GraphikRegular';
  src: url('/fonts/Graphik/Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'RoslindaleBold';
  src: url('/fonts/Roslindale/Bold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: auto;
}

html,
body, #__next {
  ${tw`h-full`}
}

body {
  font-size: 16px;
  ${tw`antialiased`}
  font-family: 'GraphikRegular', sans-serif;
  color: ${({ theme }) => theme.colors.light};
}

.primary-font {
  font-family: 'GraphikRegular', sans-serif;
}

.secondary-font {
  font-family: 'RoslindaleBold';
}

.sz-container {
  ${tw`max-w-5xl mx-auto`}
}

.hero-wrapper {
  ${tw`relative`}

  &::before {
    content: '';
    ${tw`absolute right-0 left-0 top-0 bottom-0`}
    background-color: ${({ theme }) =>
      transparentize(0.3, theme.colors.primary)};
  }

  &::after {
    content: '';
    ${tw`absolute right-0 left-0 top-0 bottom-0`}
    ${({ theme }) =>
      linearGradient({
        colorStops: [theme.colors.primary, 'transparent'],
        toDirection: 'to top',
        fallback: 'transparent',
      })}
  }
}

.hero-wrapper-1 {
  background-image: url('/images/patter-1.jpeg');
}
`
