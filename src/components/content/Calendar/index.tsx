import React, { FC, useState } from 'react'

import { Wrapper } from './styles'
import { CalendarProps } from 'src/interfaces/content'

const Calendar: FC<{ itinerary: CalendarProps[] }> = ({ itinerary }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const classNames =
    'secondary-font text-xl md:text-3xl md:leading-none focus:outline-none'

  const { title, description, instructors } = itinerary[activeIndex]

  return (
    <Wrapper className="rounded-xl px-5 md:px-0 md:flex md:flex-wrap">
      <div className="inner-wrapper rounded-t-xl md:rounded-r-none md:rounded-l-xl -mx-5 md:mx-0 px-5 md:px-0 pt-5 md:pt-8 md:flex-shrink-0 md:pl-6 md:pb-20">
        <p className="week-section-title text-center uppercase mb-5 md:mb-0 md:pr-6 md:text-lg md:pb-5">
          Itinerary
        </p>

        <ul className="week-wrapper flex md:flex-col -mx-2 md:mx-0 pb-4 overflow-x-auto">
          {itinerary.map(({ label }, i) => (
            <li key={i} className="px-4 md:pl-0 flex-shrink-0 md:py-3">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={
                  i === activeIndex ? `active ${classNames}` : classNames
                }
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-b-xl py-8 md:pt-40 md:pb-16 md:flex-1 md:px-16 lg:px-10">
        {!!title && (
          <h3 className="secondary-font text-3xl md:text-5xl mb-5">{title}</h3>
        )}

        {!!description && <p className="text-gray-600">{description}</p>}

        {!!instructors.length && (
          <div className="hidden md:block md:mt-16">
            <h2 className="secondary-font text-3xl">Your Instructors</h2>

            <div className="mt-6 mb-20 text-left">
              <ol className="list-decimal">
                {instructors.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Calendar
