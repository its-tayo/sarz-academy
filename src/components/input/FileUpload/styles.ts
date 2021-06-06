import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #9ca3af;

  .drop-zone-wrapper {
    border-color: ${({ theme }) => theme.colors.grey};
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
  }
`
