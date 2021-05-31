import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  .field {
    border-color: ${({ theme }) => theme.colors.grey};
    ${tw`w-full border border-solid rounded-2xl p-3 appearance-none bg-transparent`}
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
  }
`
