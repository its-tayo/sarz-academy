import styled from 'styled-components'

export const Wrapper = styled.div`
  .mobile-menu {
    background-color: ${({ theme }) => theme.colors.primary};
  }

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
