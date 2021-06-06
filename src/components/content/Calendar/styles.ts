import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

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
`
