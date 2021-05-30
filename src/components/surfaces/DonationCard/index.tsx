import React, { FC } from 'react'

import { Wrapper } from './styles'
import DonationForm from '../../forms/DonationForm'
import { DonationFormData, FormProps } from 'src/interfaces/forms'

const DonationCard: FC<FormProps<DonationFormData>> = ({ handleSubmit }) => (
  <Wrapper className="rounded-xl">
    <div className="bg-wrapper rounded-t-lg rounded-b-none flex items-center justify-center h-52 bg-center bg-no-repeat bg-cover">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 439.75 162"
          className="w-28 h-10"
        >
          <path
            fill="transparent"
            d="M180.5 162h-80.25v-35.49a9.41 9.41 0 00-.11-1.05h-9.27V36.61h9.4V46h36.52V8.62 0h43.5a11.93 11.93 0 01-.84 1q-12 12-24 23.94a2.93 2.93 0 00-.93 2.29v45.12a3 3 0 00.93 2.3q12.06 12 24 24a3 3 0 002.39 1h44.75a2.75 2.75 0 011.68.49 50.33 50.33 0 013.9 3.69 2.8 2.8 0 01.72 1.71c0 4.45 0 8.91.06 13.37a2.9 2.9 0 01-1.11 2.46c-1.2 1-2.25 2.23-3.47 3.23a3.36 3.36 0 01-1.93.79c-6.46 0-12.92 0-19.38.07a5.07 5.07 0 01-4.46-1.81c-.83-1-1.95-1.82-2.83-2.82a3 3 0 01-.77-1.79c-.07-4.25 0-8.5 0-12.75V105h-44.46v29.55a2.92 2.92 0 00.93 2.29q12.13 12.16 24.21 24.25c.32.29.55.6.82.91z"
          />
          <path
            fill="transparent"
            d="M251.75 0h70.75c0 .53.12 1.07.12 1.6v34.94h7.14c-9.89 29.74-19.72 59.34-29.59 89h-9.71v36.45h-38.71c.26-.31.5-.64.78-.92Q264.59 149 276.67 137a2.79 2.79 0 00.89-2.18V90.33a2.93 2.93 0 00-.93-2.29q-12-11.94-23.95-23.94a2.91 2.91 0 00-2.28-1h-40.25c-2 0-4.23.51-5.92-.21s-3.09-2.71-4.52-4.21a2.62 2.62 0 01-.68-1.6q-.08-7.24 0-14.5a2.57 2.57 0 01.57-1.52 51.89 51.89 0 013.62-3.79 2.82 2.82 0 011.7-.72q10.94-.06 21.87 0a2.87 2.87 0 011.72.7 48.1 48.1 0 013.71 3.75 2.87 2.87 0 01.71 1.73v15.08h44.58v-1.46-29.12a3.06 3.06 0 00-1-2.4Q264.13 12.45 251.75 0zM36.5 162H0V46h35.6c.28 0 .55-.06.92-.1v-9.25H46v88.88h-9.54v11.11q.01 12.69.04 25.36z"
          />
          <path
            fill="#fff"
            d="M251.75 0q12.4 12.42 24.83 24.83a3.06 3.06 0 011 2.4V57.79H233v-1.34-13.74a2.87 2.87 0 00-.71-1.73 48.1 48.1 0 00-3.71-3.71 2.87 2.87 0 00-1.72-.7q-10.93-.06-21.87 0a2.82 2.82 0 00-1.7.72 51.89 51.89 0 00-3.62 3.79 2.57 2.57 0 00-.67 1.52q-.08 7.24 0 14.5a2.62 2.62 0 00.68 1.6c1.43 1.5 2.73 3.44 4.52 4.21s3.93.21 5.92.21h40.25a2.91 2.91 0 012.28 1q11.94 12 23.95 23.94a2.93 2.93 0 01.93 2.29v44.49a2.79 2.79 0 01-.89 2.18q-12.1 12-24.14 24.12c-.28.28-.52.61-.78.92H180.5c-.27-.31-.53-.62-.82-.91q-12.1-12.12-24.23-24.21a2.92 2.92 0 01-.93-2.29V105H199v14.08a3 3 0 00.77 1.79c.88 1 2 1.79 2.83 2.82a5.07 5.07 0 004.46 1.81c6.46-.1 12.92 0 19.38-.07a3.36 3.36 0 001.93-.79c1.22-1 2.27-2.21 3.47-3.23A2.9 2.9 0 00233 119c-.07-4.46 0-8.92-.06-13.37a2.8 2.8 0 00-.72-1.71 50.33 50.33 0 00-3.9-3.69 2.75 2.75 0 00-1.68-.49h-44.75a3 3 0 01-2.39-1q-12-12.06-24-24a3 3 0 01-.93-2.3V27.32a2.93 2.93 0 01.93-2.29q12-11.94 24-23.94a11.93 11.93 0 00.84-1zm21.79 53.8c0-.33.08-.57.08-.81V27.74a2.56 2.56 0 00-.76-1.58q-10.68-10.74-21.42-21.39a2.87 2.87 0 00-1.83-.77h-67.12a2.88 2.88 0 00-1.82.75C173.54 11.84 166.46 19 159.34 26a2.52 2.52 0 00-.81 2v43.63a2.66 2.66 0 00.86 2.07Q170 84.23 180.51 94.82a2.77 2.77 0 002.18.91h44.87a3.16 3.16 0 012 .7c2.27 2.08 4.47 4.25 6.64 6.43a2.46 2.46 0 01.67 1.49q.06 8 0 16a2.43 2.43 0 01-.65 1.5q-3.39 3.4-6.9 6.7a2.63 2.63 0 01-1.62.66q-11.75.06-23.5 0a2.42 2.42 0 01-1.5-.62c-1.52-1.42-2.85-3.07-4.47-4.36a7.43 7.43 0 01-3-7.21 76.1 76.1 0 00.06-8h-36.65a3.44 3.44 0 00-.09.53v24.75a2 2 0 00.59 1.27c7.12 7.08 14.28 14.12 21.39 21.21a3.49 3.49 0 002.73 1.11h65.99a2.71 2.71 0 001.77-.6q11-10.75 21.87-21.6a2.52 2.52 0 00.68-1.61q.06-21.69 0-43.38a2.37 2.37 0 00-.64-1.51c-7-7-14.15-14-21.2-21a3.21 3.21 0 00-2.52-1h-44.87a2.53 2.53 0 01-2.07-.84c-2.1-2.25-4.3-4.42-6.42-6.66a2.22 2.22 0 01-.6-1.38q-.06-8.44 0-16.88a1.93 1.93 0 01.47-1.19 406.6 406.6 0 016.8-7 2.53 2.53 0 011.62-.64q11.81-.06 23.62 0a2.57 2.57 0 011.62.66c2.28 2.19 4.53 4.43 6.71 6.72a3 3 0 01.73 1.84c.07 3.24 0 6.5 0 9.75v2.23z"
          />
          <path
            fill="transparent"
            d="M408.75 0H415v1l2 .1v5h1.25v-5l2-.12V0h1v6.11c.8.23 1.16 0 1.13-.79v-3a16.54 16.54 0 011.38 3c.15.35.53.6.8.9a3.62 3.62 0 00.79-.93c.43-1 .76-2.08 1.12-3.13l.28.08v3.84c.78.27 1.13.1 1.14-.73 0-1.79.07-3.57.11-5.35h11.75v125.5h-8.37a1.43 1.43 0 01-1.64-1.2c-2.37-7.23-4.78-14.44-7.18-21.66Q411.82 70.36 401.07 38c-.14-.45-.24-.91-.4-1.5h8v-1.65V1.61c-.04-.54.04-1.07.08-1.61z"
          />
          <path
            fill="#fff"
            d="M408.75 0c0 .54-.12 1.07-.12 1.61v34.92h-8c.16.59.26 1 .4 1.5q10.74 32.32 21.49 64.64c2.4 7.22 4.81 14.43 7.18 21.66a1.43 1.43 0 001.64 1.2c2.79-.08 5.58 0 8.37 0V162h-62c0-.45-.12-.91-.12-1.36v-35.19h5.48c-.67-2-1.38-3.9-1.88-5.83a2 2 0 00-2.31-1.7c-5.45.09-10.91 0-16.37 0h-11.75c-.42 0-1.09.21-1.21.5-.91 2.27-1.71 4.58-2.6 7h5.52V162h-62v-25.36-11.09h9.71c9.87-29.67 19.7-59.27 29.59-89h-7.14v-1.72V1.6c0-.53-.08-1.07-.12-1.6zm-4.14 32.56V4.09h-77.92v28.45h7.78c-.55 1.72-1 3.25-1.52 4.79q-14.46 45.14-28.9 90.27c-.41 1.31-.93 1.75-2.29 1.68-2.39-.12-4.8 0-7.19 0v28.53h53.87v-28.57h-5.95c1.16-4.7 2.3-9.26 3.37-13.83.22-1 .61-1.23 1.58-1.22h36.72c1.16 5.07 2.29 10 3.46 15.08h-5.91v28.46h54.06v-28.5h-7.83a1.45 1.45 0 01-1.73-1.22q-14.43-45.11-28.92-90.23c-.54-1.69-1.06-3.38-1.64-5.22zM36.5 162v-25.36-11.11H46V36.65h-9.48v9.29c-.37 0-.64.1-.92.1H0V0h136.75v46h-36.48v-9.39h-9.4v88.85h9.31a9.41 9.41 0 01.11 1.05V162zM50 32.6v96.68h-9.45v28.49h55.92v-28.56h-9.58V32.66h17.63v9.54h28.18V4.1H4.2v38.09h28.34V32.6z"
          />
          <path
            fill="transparent"
            d="M352.5 162v-36.48H347c.89-2.46 1.69-4.77 2.6-7 .12-.29.79-.5 1.21-.5h11.75c5.46 0 10.92.05 16.37 0a2 2 0 012.31 1.7c.5 1.93 1.21 3.79 1.88 5.83h-5.48v35.19c0 .45.08.91.12 1.36z"
          />
          {/* <path d="M428 0c0 1.78-.11 3.56-.11 5.35 0 .83-.36 1-1.14.73V2.22l-.28-.08c-.36 1-.69 2.11-1.12 3.13a3.62 3.62 0 01-.79.93c-.27-.3-.65-.55-.8-.9a16.54 16.54 0 00-1.38-3v3c0 .82-.33 1-1.13.79V0H423l1.59 4.27c.55-1.68 1-3 1.41-4.27zM420.25 0v1l-2 .12v5H417v-5L415 1V0z" /> */}
          <path
            fill="#000"
            d="M426 0c-.43 1.3-.86 2.59-1.41 4.27L423 0zM273.54 53.8h-36.66v-2.26-9.75a3 3 0 00-.73-1.84c-2.18-2.29-4.43-4.53-6.71-6.72a2.57 2.57 0 00-1.62-.66q-11.81-.06-23.62 0a2.53 2.53 0 00-1.62.64c-2.31 2.29-4.56 4.63-6.8 7a1.93 1.93 0 00-.47 1.19v16.88a2.22 2.22 0 00.6 1.38c2.12 2.24 4.32 4.41 6.42 6.66a2.53 2.53 0 002.07.84h44.87a3.21 3.21 0 012.52 1c7.05 7 14.15 14 21.2 21a2.37 2.37 0 01.64 1.51v43.38a2.52 2.52 0 01-.68 1.61Q262 146.5 251 157.25a2.71 2.71 0 01-1.77.6h-65.99a3.49 3.49 0 01-2.73-1.11c-7.11-7.09-14.27-14.13-21.39-21.21a2 2 0 01-.59-1.27v-24.75a3.44 3.44 0 01.09-.53h36.61a76.1 76.1 0 01-.06 8 7.43 7.43 0 003 7.21c1.62 1.29 2.95 2.94 4.47 4.36a2.42 2.42 0 001.5.62q11.76.06 23.5 0a2.63 2.63 0 001.62-.66q3.51-3.28 6.9-6.7a2.43 2.43 0 00.65-1.5q.06-8 0-16a2.46 2.46 0 00-.67-1.49c-2.17-2.18-4.37-4.35-6.64-6.43a3.16 3.16 0 00-2-.7q-22.44-.06-44.87 0a2.77 2.77 0 01-2.18-.91Q170 84.23 159.38 73.7a2.66 2.66 0 01-.86-2.07V28a2.52 2.52 0 01.81-2c7.12-7.08 14.2-14.2 21.33-21.26a2.88 2.88 0 011.83-.74h67.12a2.87 2.87 0 011.83.74q10.74 10.65 21.39 21.39a2.56 2.56 0 01.76 1.58c.05 8.41 0 16.83 0 25.25.03.27-.02.51-.05.84zm-4.9-4.8a1.2 1.2 0 00.12-.32V31.31a1.93 1.93 0 00-.56-1.16q-10.12-10.3-20.31-20.52a2.2 2.2 0 00-1.38-.6h-60.87a2.06 2.06 0 00-1.3.52q-10.15 10.07-20.24 20.23a2.06 2.06 0 00-.54 1.29v37.37a2.07 2.07 0 00.55 1.29q10.09 10.14 20.27 20.2a3.05 3.05 0 002 .75c14.75 0 29.5 0 44.25.06a2.88 2.88 0 011.86.65c3 3 5.92 6 8.82 9a2.58 2.58 0 01.67 1.62q.06 10.62 0 21.25a2.24 2.24 0 01-.55 1.41q-4.32 4.5-8.74 8.92a2.36 2.36 0 01-1.5.65q-15.06.06-30.12 0a2.45 2.45 0 01-1.5-.62c-1.6-1.52-3.15-3.1-4.7-4.67s-3.6-2.85-4.37-4.7-.19-4.18-.2-6.31v-4.15h-26.66a3.18 3.18 0 00-.09.45v16.62a2.28 2.28 0 00.67 1.37c2 2.1 4.09 4.15 6.14 6.23q6.84 6.93 13.71 13.85a2.2 2.2 0 001.43.52h61.37a2.34 2.34 0 001.5-.63q9.87-9.91 19.67-19.92a2.75 2.75 0 00.7-1.72q.06-18 0-36a2.67 2.67 0 00-.72-1.71c-6.56-6.69-13.18-13.34-19.75-20a3 3 0 00-2.39-1h-44.49a3 3 0 01-1.88-.66 415.45 415.45 0 01-8.66-8.65 2.42 2.42 0 01-.59-1.52q-.06-11.31 0-22.62a2.49 2.49 0 01.68-1.6q4.18-4.3 8.48-8.48a3 3 0 011.83-.75q14.68-.06 29.37 0a2.9 2.9 0 011.82.77c2.09 2 3.94 4.33 6.19 6.17a8.44 8.44 0 013.37 8.23 52 52 0 000 6.26zM404.61 32.56h-9c.58 1.84 1.1 3.53 1.64 5.22q14.47 45.14 28.92 90.27a1.45 1.45 0 001.73 1.22c2.58-.06 5.15 0 7.83 0v28.5h-54.02v-28.48h5.91c-1.17-5.08-2.3-10-3.46-15.08h-36.72c-1 0-1.36.26-1.58 1.22-1.07 4.57-2.21 9.13-3.37 13.83h5.95v28.54h-53.87v-28.55c2.39 0 4.8-.09 7.19 0 1.36.07 1.88-.37 2.29-1.68q14.4-45.15 28.9-90.27c.5-1.54 1-3.07 1.52-4.79h-7.78V4.09h77.92zm-62.84-5.05c-.18.55-.31 1-.45 1.4Q337.66 40 334 51.05q-13.59 41-27.17 82.07c-.3.92-.68 1.23-1.63 1.19-1.86-.07-3.72 0-5.62 0v18.49h43.84v-18.51h-8.62a5.08 5.08 0 01.11-.58q3.91-11.85 7.81-23.7c.24-.74.65-.81 1.29-.81h42a1.29 1.29 0 011.47 1.09c2.38 7.27 4.8 14.52 7.2 21.78.23.69.41 1.4.67 2.28h-8.63v18.45h44.07v-18.5h-5.68a1.35 1.35 0 01-1.59-1.11c-1.64-5.15-3.35-10.28-5-15.4L389 29c-.14-.42-.24-.86-.4-1.44h11.2V9.05h-68.1v18.46zM50 32.6H32.54v9.59H4.2V4.1h128.5v38.1h-28.18v-9.54H86.89v96.55h9.58v28.56H40.55v-28.49H50zm5.09-5v106.72h-9.56v18.48h45.89v-18.55h-9.35V27.64h27.23v9.52H128V9.07H9.22v28.12h18.33v-9.58z"
          />
          <path
            fill="#fff"
            d="M268.64 49H242a52 52 0 010-6.25 8.44 8.44 0 00-3.35-8.22c-2.25-1.84-4.1-4.14-6.19-6.17a2.9 2.9 0 00-1.82-.77q-14.69-.07-29.37 0a3 3 0 00-1.83.75q-4.31 4.17-8.48 8.48a2.49 2.49 0 00-.68 1.6q-.06 11.31 0 22.62a2.42 2.42 0 00.59 1.52c2.85 2.92 5.73 5.82 8.66 8.65a3 3 0 001.88.66h44.49a3 3 0 012.39 1c6.57 6.68 13.19 13.33 19.75 20a2.67 2.67 0 01.72 1.71q.06 18 0 36a2.75 2.75 0 01-.7 1.72q-9.8 10-19.67 19.92a2.34 2.34 0 01-1.5.63h-61.37a2.2 2.2 0 01-1.43-.52q-6.89-6.9-13.71-13.85c-2-2.08-4.12-4.13-6.14-6.23a2.28 2.28 0 01-.67-1.37v-16.62a3.18 3.18 0 01.09-.45h26.61V118c0 2.13-.56 4.5.2 6.31s2.85 3.16 4.37 4.7 3.1 3.15 4.7 4.67a2.45 2.45 0 001.5.62q15.06.06 30.12 0a2.36 2.36 0 001.5-.65q4.43-4.41 8.74-8.92a2.24 2.24 0 00.55-1.41q.06-10.64 0-21.25a2.58 2.58 0 00-.67-1.62c-2.9-3-5.83-6.07-8.82-9a2.88 2.88 0 00-1.86-.65c-14.75 0-29.5 0-44.25-.06a3.05 3.05 0 01-2-.75q-10.19-10.05-20.27-20.2a2.07 2.07 0 01-.55-1.29V31.13a2.06 2.06 0 01.54-1.29q10.1-10.16 20.24-20.24a2.06 2.06 0 011.3-.52h60.87a2.2 2.2 0 011.38.6q10.2 10.23 20.32 20.51a1.93 1.93 0 01.56 1.16v17.37a1.2 1.2 0 01-.1.28zm-91.89 69.82v10a2 2 0 00.66 1.12q7.31 7.35 14.68 14.66a2.72 2.72 0 001.72.72q22.82.06 45.63 0a2.93 2.93 0 001.82-.77c5.19-5.12 10.32-10.3 15.5-15.44a2.64 2.64 0 00.85-2.07V96.66a2.65 2.65 0 00-.86-2.07q-8-7.92-15.91-15.92a2.94 2.94 0 00-2.29-.92h-44.88a2.89 2.89 0 01-1.85-.67Q186 71.41 180.36 65.6a2.74 2.74 0 01-.71-1.73q-.06-13.8 0-27.62a2.88 2.88 0 01.75-1.83q6.22-6.33 12.56-12.55a3 3 0 011.93-.79h43.12a2.49 2.49 0 012 .78c4.25 4.3 8.55 8.55 12.78 12.86a3 3 0 01.74 1.82c.09 2.07 0 4.14 0 6.21h3.83v-7.57a2.62 2.62 0 00-.86-2.08q-7.5-7.49-14.9-14.99a2.61 2.61 0 00-2.09-.83h-46.12a2.68 2.68 0 00-2.08.85Q184 25.5 176.64 32.8a2.64 2.64 0 00-.87 2.06v30.38a2.46 2.46 0 00.8 2q6.75 6.69 13.43 13.44a3 3 0 002.4 1h44.62a3.08 3.08 0 012.4 1q6.75 6.84 13.6 13.61a2.62 2.62 0 01.86 2.08v27.25a2.61 2.61 0 01-.88 2.06q-6.57 6.51-13.08 13.08a2.64 2.64 0 01-2.06.87h-42.38a2.51 2.51 0 01-2-.8c-4-4.09-8.13-8.12-12.15-12.23a3.14 3.14 0 01-.79-1.94c-.09-2.57 0-5.14 0-7.78zM341.77 27.51H331.7V9.05h68.1v18.49h-11.16c.16.58.26 1 .4 1.44l29.43 88.82c1.7 5.12 3.41 10.25 5 15.4a1.35 1.35 0 001.59 1.11c1.86-.06 3.73 0 5.68 0v18.5h-44.02v-18.47h8.63c-.26-.88-.44-1.59-.67-2.28-2.4-7.26-4.82-14.51-7.2-21.78a1.29 1.29 0 00-1.47-1.09h-42c-.64 0-1.05.07-1.29.81q-3.87 11.86-7.81 23.7a5.08 5.08 0 00-.11.58h8.61v18.49h-43.84v-18.48h5.62c.95 0 1.33-.27 1.63-1.19Q320.38 92.07 334 51.05q3.67-11.07 7.33-22.14c.13-.42.26-.85.44-1.4zm3.73-10.8v3.75h12.89c-1.6 4.75-3.14 9.32-4.67 13.89Q335.84 87.5 318 140.64a1.52 1.52 0 01-1.75 1.27c-3.58-.08-7.16 0-10.74 0-.4 0-1.1.31-1.13.53a28.26 28.26 0 00-.05 3.19h33.36v-3.79h-16.14c.16-.54.28-.94.41-1.32l28.53-84.77q5.78-17.15 11.51-34.3c.27-.79.6-1.15 1.48-1.1a31.4 31.4 0 004 0c.93-.06 1.27.33 1.55 1.16q7.22 21.6 14.48 43.17 12.36 36.84 24.71 73.69c.38 1.12.72 2.24 1.15 3.58h-17.66v3.67H425v-3.74h-10.33a1.44 1.44 0 01-1.65-1.2c-3.64-11-7.34-21.93-11-32.89L374 24.3l-1.33-3.94h12.9v-3.65zm1.95 78.94h35l-17.27-52.49c-5.97 17.67-11.83 35.01-17.73 52.49zM55.12 27.61H27.55v9.58H9.22V9.07H128v28.09h-18.7v-9.52H82.07v106.61h9.35v18.55H45.53v-18.48h9.59zm65.26 4.44V15.8H15.62V32h3.71V19.57h46.94v122.34H50.33v3.71H86.2v-3.78H70.31V19.56h46.36v12.49z"
          />
          <path
            fill="#000"
            d="M176.75 118.81h3.79v7.78a3.14 3.14 0 00.79 1.94c4 4.11 8.11 8.14 12.15 12.23a2.51 2.51 0 002 .8h42.38a2.64 2.64 0 002.06-.87q6.51-6.57 13.08-13.08a2.61 2.61 0 00.88-2.06V98.3a2.62 2.62 0 00-.86-2.08q-6.84-6.77-13.6-13.61a3.08 3.08 0 00-2.4-1H192.4a3 3 0 01-2.4-1q-6.67-6.76-13.43-13.44a2.46 2.46 0 01-.8-2V34.79a2.64 2.64 0 01.87-2.06q7.37-7.3 14.67-14.68a2.68 2.68 0 012.08-.85h46.12a2.61 2.61 0 012.09.83q7.43 7.5 14.93 14.94a2.62 2.62 0 01.86 2.08c-.05 2.49 0 5 0 7.57h-3.83c0-2.07.06-4.14 0-6.21a3 3 0 00-.74-1.82c-4.23-4.31-8.53-8.56-12.78-12.86a2.49 2.49 0 00-2-.78h-43.12a3 3 0 00-1.93.79q-6.34 6.21-12.56 12.55a2.88 2.88 0 00-.75 1.83q-.07 13.81 0 27.62a2.74 2.74 0 00.71 1.73q5.69 5.81 11.49 11.49a2.89 2.89 0 001.85.67q22.44.06 44.88 0a2.94 2.94 0 012.29.92q7.92 8 15.91 15.92a2.65 2.65 0 01.86 2.07v30.38a2.64 2.64 0 01-.85 2.07c-5.18 5.14-10.31 10.32-15.5 15.44a2.93 2.93 0 01-1.82.77q-22.82.06-45.63 0a2.72 2.72 0 01-1.72-.72q-7.38-7.29-14.68-14.66a2 2 0 01-.66-1.12c-.08-3.18-.06-6.5-.06-9.89zM345.5 16.71h40v3.65h-12.9l1.4 3.94 28 83.51c3.67 11 7.37 21.91 11 32.89a1.44 1.44 0 001.65 1.2c3.41-.06 6.83 0 10.33 0v3.74h-33.27V142h17.66c-.43-1.34-.77-2.46-1.15-3.58q-12.35-36.86-24.71-73.69Q376.27 43.1 369 21.51c-.28-.83-.62-1.22-1.55-1.16a31.4 31.4 0 01-4 0c-.88-.05-1.21.31-1.48 1.1q-5.73 17.16-11.51 34.29L322 140.51c-.13.38-.25.78-.41 1.32h16.11v3.79h-33.4a28.26 28.26 0 01.05-3.19c0-.22.73-.52 1.13-.53 3.58 0 7.16-.07 10.74 0a1.52 1.52 0 001.75-1.27q17.85-53.13 35.75-106.28c1.53-4.57 3.07-9.14 4.67-13.89H345.5z"
          />
          <path
            fill="#000"
            d="M347.45 95.65c5.9-17.48 11.76-34.82 17.73-52.49l17.25 52.49zm17.85-36.44l-.25.06q-4.92 15.86-9.84 31.73h19.69c-3.23-10.66-6.42-21.23-9.6-31.79zM120.38 32.05h-3.71V19.56H70.31v122.28H86.2v3.78H50.33v-3.71h15.94V19.57H19.33V32h-3.71V15.8h104.76z"
          />
          <path
            fill="#fff"
            d="M365.3 59.21c3.18 10.56 6.37 21.13 9.6 31.82h-19.69q4.94-15.91 9.84-31.76zm5.1 27.59c-1.75-5.09-3.44-10-5.22-15.21-1.81 5.24-3.5 10.17-5.24 15.21z"
          />
          <path
            fill="transparent"
            d="M370.4 86.8h-10.46c1.74-5 3.43-10 5.24-15.21 1.82 5.2 3.47 10.12 5.22 15.21z"
          />
        </svg>
      </div>
    </div>

    <div className="px-4 py-6">
      <div className="mb-8">
        <DonationForm handleSubmit={handleSubmit} />
      </div>

      <img
        alt="paystack-badge"
        src="/images/paystack-badge.png"
        className="w-48 h-auto mx-auto"
      />
    </div>
  </Wrapper>
)

export default DonationCard
