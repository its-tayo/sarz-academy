import React, { FC } from 'react'
import Link from 'next/link'

import { LayoutProps } from 'src/interfaces/navigation'
import { Wrapper } from './styles'

const Layout: FC<{ config: LayoutProps }> = ({ children, config }) => {
  const {
    copyright,
    menu_items,
    twitter_url,
    footer_text,
    facebook_url,
    instagram_url,
  } = config

  return (
    <Wrapper>
      <header>
        <div className="sz-container relative z-10">
          <div className="absolute left-0 py-6 w-full flex flex-wrap items-center h-32">
            <div className="px-6 w-1/3 h-full">
              <Link href="/">
                <a className="block w-20">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M16.17 81.94H-.09V63.45h51.7v18.49H35.34v108.88H16.17V81.94zM56.4 63.45h19.34v51.02h13.18V63.45h19.34v127.37H88.93v-55.98H75.75v55.98H56.4V63.45zM159.47 63.45v18.49h-24.65v33.39h19.35v19.34h-19.35v36.81h25.68v19.35h-45.02V63.45h43.99z"
                    />
                    <g>
                      <path
                        fill="#fff"
                        d="M183.7 167.97v-25.51h19.18v22.25c0 5.82 1.88 8.9 6.33 8.9 4.62 0 6.33-3.08 6.33-10.96v-2.91c0-9.07-.86-12.33-7.87-21.4l-12.33-15.75c-8.22-10.61-10.62-18.83-10.62-31.5v-4.11c0-16.95 8.56-24.82 23.8-24.82h3.6c15.92 0 22.08 7.02 22.08 22.08v20.89h-18.66V86.82c0-4.28-.86-7.53-5.48-7.53s-5.65 2.91-5.65 8.9v2.4c0 7.19 1.37 11.13 7.87 19.52l12.33 15.92c8.73 11.3 11.47 17.81 11.47 32.19v4.11c0 18.66-8.05 29.79-24.99 29.79h-3.77c-15.4-.01-23.62-8.4-23.62-24.15zM271.36 166.77h-14.04l-2.57 23.97h-17.29l15.58-127.37h22.94l16.61 127.37h-18.66l-2.57-23.97zm-7.19-66.08l-4.96 47.08h10.1l-5.14-47.08zM315.01 190.74h-19.34V63.36H327c12.84 0 19.35 5.48 19.35 19.69v22.6c0 10.62-4.96 14.72-8.39 16.27 4.28 1.88 8.39 5.31 8.39 13.87v44.68c0 5.14 1.03 7.53 1.88 9.42v.86h-19.17c-.86-1.37-1.88-3.6-1.88-10.44v-38.35c0-5.65-1.03-8.05-7.19-8.05h-4.97v56.83zm0-74.99h5.14c5.31 0 7.02-3.43 7.02-9.07V88.87c0-5.48-1.2-8.22-7.02-8.22h-5.14v35.1zM398.56 63.36v16.78l-27.9 91.93h29.27v18.66h-49.48v-17.29l27.56-91.93h-25.85V63.36h46.4z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#fff"
                        d="M34.23 312.33H20.19l-2.57 23.97H.33l15.58-127.37h22.94L55.46 336.3H36.8l-2.57-23.97zm-7.19-66.09l-4.96 47.08h10.1l-5.14-47.08zM89.7 310.44v-29.62h19v29.44c0 13.7-4.45 27.56-23.11 27.56h-4.28c-19.52 0-23.8-14.04-23.8-26.88v-77.72c0-13.01 5.65-25.51 23.11-25.51h4.45c21.23 0 23.63 14.04 23.63 26.54v22.77h-19v-22.43c0-5.48-1.71-8.39-6.51-8.39-4.79 0-5.99 2.74-5.99 8.39v75.67c0 5.65 1.88 8.73 6.16 8.73 4.63.01 6.34-3.41 6.34-8.55zM144.66 312.33h-14.04l-2.57 23.97h-17.29l15.58-127.37h22.94l16.61 127.37h-18.66l-2.57-23.97zm-7.2-66.09l-4.96 47.08h10.1l-5.14-47.08zM168.97 208.92h29.62c16.61 0 21.74 9.41 21.74 24.48v77.55c0 15.58-5.82 25.34-21.74 25.34h-29.62V208.92zm19.34 108.88h4.62c5.82 0 7.53-3.08 7.53-9.93v-71.73c0-7.36-1.88-9.93-6.68-9.93h-5.48l.01 91.59zM271.18 208.92v18.49h-24.65v33.39h19.35v19.34h-19.35v36.81h25.68v19.35h-45.02V208.93l43.99-.01zM277.17 208.92h24.82l9.24 67.28 9.42-67.28h23.11v127.37h-18.15v-82.35l-11.64 82.35h-7.7l-11.81-82.35v82.35h-17.29V208.92zM363.8 283.22l-17.46-74.3h18.83l8.9 47.42 8.56-47.42h17.46l-16.95 74.47v52.9H363.8v-53.07z"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
            </div>

            <div className="px-6 w-2/3 text-right">
              <ul className="flex flex-wrap justify-end -mx-2">
                {menu_items.value?.map(({ title, link }, i) => (
                  <li key={i} className="px-2">
                    <Link href={link?.value || ''}>
                      <a>{title?.value}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <button type="button">
                <svg
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer>
        <div className="sz-container px-6 pt-8 md:pt-16 pb-10 md:pb-20">
          <div className="mb-8">
            <Link href="/">
              <a className="block w-40 mx-auto">
                <svg
                  className="w-full"
                  viewBox="0 0 703.28 112.25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M14 17H0V1h44.6v16h-14v93.93H14zM48.72 1h16.69v44h11.37V1h16.69v109.92H76.78v-48.3H65.41v48.3H48.72zM137.62 1v16h-21.28v28.8H133v16.67h-16.66v31.76h22.16v16.69H99.66V1zM156.51 91.28v-22h16.54v19.2c0 5 1.63 7.68 5.47 7.68S184 93.5 184 86.7v-2.51c0-7.83-.73-10.64-6.79-18.46l-10.66-13.59c-7.09-9.14-9.16-16.25-9.16-27.14v-3.58C157.39 6.8 164.77 0 177.92 0H181c13.74 0 19.06 6.06 19.06 19.05v18H184V21.27c0-3.69-.73-6.5-4.72-6.5s-4.88 2.51-4.88 7.68v2.07c0 6.21 1.19 9.6 6.8 16.84l10.64 13.73c7.53 9.75 9.89 15.37 9.89 27.77v3.54c0 16.11-6.94 25.71-21.57 25.71h-3.24c-13.32 0-20.41-7.24-20.41-20.83zM232.11 90.24H220l-2.21 20.68h-14.92L216.31 1h19.79l14.33 109.88h-16.11zm-6.2-57l-4.28 40.62h8.71zM269.76 110.92h-16.68V1h27c11.07 0 16.69 4.72 16.69 17v19.5c0 9.15-4.28 12.7-7.24 14 3.69 1.62 7.24 4.58 7.24 12v38.55a17.27 17.27 0 001.62 8.13v.73h-16.51c-.75-1.18-1.63-3.1-1.63-9V68.83c0-4.88-.88-6.94-6.2-6.94h-4.29zm0-64.69h4.44c4.57 0 6.05-2.95 6.05-7.82V23.05c0-4.73-1-7.09-6.05-7.09h-4.44zM341.82 1v14.51l-24.07 79.31H343v16.1h-42.68V96l23.78-79.31h-22.3V1zM387.74 90.24h-12.11l-2.21 20.68H358.5L371.94 1h19.79l14.33 109.88H390zm-6.2-57l-4.28 40.62H386zM435.58 88.62V63.07H452v25.4c0 11.81-3.84 23.78-19.94 23.78h-3.7c-16.83 0-20.53-12.11-20.53-23.19V22c0-11.23 4.88-22 19.95-22h3.84C449.91 0 452 12.12 452 22.89v19.65h-16.4V23.19c0-4.73-1.48-7.23-5.61-7.23s-5.17 2.36-5.17 7.23v65.28c0 4.88 1.62 7.53 5.32 7.53 3.96 0 5.44-2.95 5.44-7.38zM483 90.24h-12.1l-2.22 20.68h-14.94L467.17 1H487l14.33 109.88h-16.1zm-6.2-57l-4.28 40.62h8.71zM503.94 1h25.54c14.33 0 18.76 8.12 18.76 21.12v66.9c0 13.45-5 21.86-18.76 21.86h-25.54zm16.68 94h4c5 0 6.49-2.66 6.49-8.57V24.52c0-6.35-1.63-8.56-5.76-8.56h-4.73zM592.1 1v16h-21.28v28.8h16.69v16.67h-16.69v31.76H593v16.69h-38.86V1zM597.26 1h21.41l8 58 8.12-58h19.94v109.92h-15.67v-71l-10 71h-6.64l-10.19-71v71h-14.97zM672 65.14L656.91 1h16.24l7.68 41 7.38-41h15.07l-14.63 64.29v45.63H672z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
          </div>

          {!!footer_text.value && (
            <p className="text-sm text-center">{footer_text.value}</p>
          )}

          <ul className="my-5 flex items-center justify-center">
            {!!facebook_url.value && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={facebook_url.value.url}
                  className="media-link h-9 w-9 rounded-full flex items-center justify-center"
                >
                  <svg
                    stroke="none"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </li>
            )}

            {!!instagram_url.value && (
              <li className="mx-5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={instagram_url.value.url}
                  className="media-link h-9 w-9 rounded-full flex items-center justify-center"
                >
                  <svg
                    fill="none"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    className="h-5 w-5 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>
              </li>
            )}

            {!!twitter_url.value && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={twitter_url.value.url}
                  className="media-link h-9 w-9 rounded-full flex items-center justify-center"
                >
                  <svg
                    stroke="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </li>
            )}
          </ul>

          {!!copyright.value && (
            <p className="text-sm text-center">{copyright.value}</p>
          )}
        </div>
      </footer>
    </Wrapper>
  )
}

export default Layout
