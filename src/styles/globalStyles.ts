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

.color-primary {
  color: ${({ theme }) => theme.colors.primary};
}

.primary-bg {
  background-color: ${({ theme }) => theme.colors.primary};
}

.light-bg {
  background-color: ${({ theme }) => theme.colors.light};
}

.alt1-bg {
  background-color: ${({ theme }) => theme.colors.alt1};
}

.alt3-bg {
  background-color: ${({ theme }) => theme.colors.alt3};
}

.border-brown {
  border-color: #2A2622;
}

.sz-container {
  ${tw`max-w-full sm:max-w-lg md:max-w-7xl mx-auto`}
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

.hero-wrapper-2 {
  background-image: url('/images/patter-1.jpeg');
}

.hero-wrapper-3 {
  background-image: url('/images/patter-1.jpeg');
}

.hero-wrapper-complete {
  background-image: url('images/dummy/img5.jpg');
}

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

/* Slick Slider start */
.slick-slider {
  .slick-dots {
    ${tw`relative bottom-0 my-8`}

    li button:before {
      ${tw`text-xs w-3 h-3`}
      color: ${({ theme }) => theme.colors.light};
    }
  }

  &.sessions-slider .w-screen {
    width: 100vw !important;
  }
}
/* Slick Slider end */

/* Media query start */
@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  .hero-wrapper-1 {
    ${tw`bg-none`}
    background-color: ${({ theme }) => theme.colors.primary};

    &::before {
      ${tw`w-1/2 ml-auto bg-repeat-y bg-center bg-contain`}
      background-image: url('/images/patter-1.jpeg');
    }
  }

  .md-hero-wrapper {
    ${tw`relative`}
    background-image: url('/images/patter-1.jpeg');

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
}

@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  .hero-wrapper-3 {
    &::before {
      ${tw`w-1/2 ml-auto`}
      background-color: ${({ theme }) => theme.colors.light};
    }

    &::after {
      ${tw`bg-none`}
    }
  }
}
/* Media query end */
`
