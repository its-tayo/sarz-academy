import React, { FC } from 'react'

import { Wrapper } from './styles'

const Calendar: FC = () => (
  <Wrapper className="rounded-xl px-5">
    <div className="inner-wrapper rounded-t-xl -mx-5 px-5 pt-5">
      <p className="text-center uppercase mb-5">Itinerary</p>

      <ul className="week-wrapper flex -mx-2 pb-4 overflow-x-auto">
        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 1
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="active secondary-font text-xl">
            Week 2
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 3
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 4
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 5
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 6
          </button>
        </li>

        <li className="px-4 flex-shrink-0">
          <button type="button" className="secondary-font text-xl">
            Week 7
          </button>
        </li>
      </ul>
    </div>
    <div className="rounded-b-xl py-8">
      <h3 className="secondary-font text-3xl mb-5">
        Creativity and Song Writing
      </h3>

      <p>
        Learn how to use improvisation to help write melodies and how to
        structure a song
      </p>
    </div>
  </Wrapper>
)

export default Calendar
