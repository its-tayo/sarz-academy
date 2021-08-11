import styled from 'styled-components'
import tw from 'twin.macro'

export const ModalWrapper = styled.div`
  ${tw`fixed block top-0 bottom-0 left-0 right-0 z-50 overflow-y-auto`}
  background-color: rgba(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    display: none;
  }

  .close-btn {
    ${tw`w-8 h-8 flex items-center justify-center rounded-full focus:outline-none`}
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
  }

  .modal-inner {
    ${tw`relative w-auto flex items-center my-4 sm:my-8 mx-4 sm:mx-auto max-w-4xl`}
    min-height: calc(100% - (1rem * 2));

    @media (min-width: 640px) {
      min-height: calc(100% - (2rem * 2));
    }
  }
`
