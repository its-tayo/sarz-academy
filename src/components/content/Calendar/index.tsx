import React, { FC } from 'react'

import Image from '../Image'
import { Wrapper } from './styles'

const Calendar: FC = () => (
  <Wrapper className="rounded-xl px-5 md:px-0 md:flex md:flex-wrap">
    <div className="inner-wrapper rounded-t-xl md:rounded-r-none md:rounded-l-xl -mx-5 md:mx-0 px-5 md:px-0 pt-5 md:pt-8 md:flex-shrink-0 md:pl-6 md:pb-20">
      <p className="week-section-title text-center uppercase mb-5 md:mb-0 md:pr-6 md:text-lg md:pb-5">
        Itinerary
      </p>

      <ul className="week-wrapper flex md:flex-col -mx-2 md:mx-0 pb-4 overflow-x-auto">
        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 1
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="active secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 2
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 3
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 4
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 5
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 6
          </button>
        </li>

        <li className="px-4 md:pl-0 flex-shrink-0 md:py-3">
          <button
            type="button"
            className="secondary-font text-xl md:text-3xl md:leading-none"
          >
            Week 7
          </button>
        </li>
      </ul>
    </div>

    <div className="rounded-b-xl py-8 md:pt-40 md:pb-16 md:flex-1 md:px-16 lg:px-10">
      <h3 className="secondary-font text-3xl md:text-5xl mb-5">
        Creativity and Song Writing
      </h3>

      <p className="text-gray-600">
        Learn how to use improvisation to help write melodies and how to
        structure a song
      </p>

      <div className="hidden md:block md:mt-16">
        <h2 className="secondary-font text-3xl">Your Instructors</h2>

        <div className="mt-12 mb-20 text-left flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="md:px-2 lg:px-4">
            <div className="md:w-32 md:h-36 mx-auto mb-4">
              <Image src="/images/dummy/img1.jpg" />
            </div>
            <p>Tiwa Savage</p>
          </div>

          <div className="md:px-2 lg:px-4">
            <div className="md:w-32 md:h-36 mx-auto mb-4">
              <Image src="/images/dummy/img6.jpg" />
            </div>
            <p>Ayo Balogun </p>
          </div>

          {/* <div className="md:px-2 lg:px-4">
            <div className="md:w-32 md:h-36 mx-auto mb-4">
              <Image src="/images/dummy/img7.jpg" />
            </div>
            <p>Sarz Osabuohien</p>
          </div> */}
        </div>
      </div>
    </div>
  </Wrapper>
)

export default Calendar
