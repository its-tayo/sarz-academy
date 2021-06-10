import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  /* background-color: red; */

  .inner-wrapper {
    background-color: ${({ theme }) => theme.colors.alt2};
  }

  .week-wrapper {
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      color: #4359b4;

      &.active {
        ${tw`relative`}
        color: ${({ theme }) => theme.colors.light};

        &:after {
          content: '';
          ${tw`absolute w-full h-1 left-0 bottom-0 -mb-4`}
          background-color: ${({ theme }) => theme.colors.light};
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .week-section-title {
      border-bottom: 1px solid #384781;
    }

    .week-wrapper {
      li {
        border-bottom: 1px solid #384781;
      }

      button.active:after {
        ${tw`w-2 left-auto right-0 -mr-9 -mb-3.5`}
        height: calc(100% + 1.6rem);
      }
    }
  }
`
