import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.light};

  .bg-wrapper {
    background-image: url('/images/patter-1.jpeg');
  }
`
