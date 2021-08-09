import styled from 'styled-components'

export const PillWrapper = styled.button<{ active: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.dark : theme.colors.light};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.light : 'rgba(255, 255, 255, 0.3)'};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
`
