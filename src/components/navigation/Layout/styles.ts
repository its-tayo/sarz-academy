import styled from 'styled-components'

export const Wrapper = styled.div`
  footer {
    background-color: ${({ theme }) => theme.colors.primary};
    .media-link {
      background-color: ${({ theme }) => theme.colors.light};

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`
