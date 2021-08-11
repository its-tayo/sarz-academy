import React, { FC } from 'react'

import { ModalWrapper } from './styles'
import ClientOnlyPortal from './ClientOnlyPortal'
import { ModalProps } from 'src/interfaces/content'

const Modal: FC<ModalProps> = ({ children, openModal, isModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <ClientOnlyPortal selector="#modal">
          <ModalWrapper>
            <div className="absolute z-10 top-0 right-0 mt-5 lg:mt-24 mr-5 lg:mr-24">
              <button type="button" onClick={openModal} className="close-btn">
                <svg
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="modal-inner">{children}</div>
          </ModalWrapper>
        </ClientOnlyPortal>
      )}
    </>
  )
}

export default Modal
