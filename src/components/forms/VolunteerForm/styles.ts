import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};

  label,
  input,
  textarea,
  select {
    color: #79818e;
  }
`
