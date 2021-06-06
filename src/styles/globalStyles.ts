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

.direction-rtl {
  direction: rtl;
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

.brown-bg {
  background-color: #1E171A;
}

.blackberry-bg {
  background-color: #210315;
}

.sz-container {
  ${tw`max-w-full sm:max-w-lg md:max-w-5xl mx-auto`}
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

.hero-wrapper-complete {
  background-image: url('images/dummy/img5.jpg');
}

.marquee-wrapper {
  .marquee-1 {
    animation: marquee 15s linear infinite alternate;
  }

  .marquee-2 {
    animation: marquee2 15s linear infinite alternate;
  }
}

@keyframes marquee {
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(100%);
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
}
/* Slick Slider end */
`
