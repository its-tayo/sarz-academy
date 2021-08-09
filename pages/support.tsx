import React, { FC, useState } from 'react'
import axios from 'axios'

import { LayoutProps } from 'src/interfaces/navigation'
import { Layout, Pill, Button } from 'src/components'

type Props = {
  config: LayoutProps
}

const pills = ['Donate', 'Volunteer', 'Sponsorship', 'Partnership']

const Support: FC<Props> = ({ config }) => {
  const [currentPill, setCurrentPill] = useState(pills[0])

  return (
    <Layout config={config}>
      <section className="hero-wrapper hero-wrapper-1 pt-32 md:pb-10 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <h1 className="secondary-font text-4xl text-center sm:w-72 sm:mx-auto">
              An Incubator For African Creatives
            </h1>

            <p className="mt-8 mb-3 text-center md:w-full md:max-w-lg md:mx-auto">
              The Sarz Academy (TSA) is a non-governmental and non-profit
              organization, set up by Osabuohien Osaretin (aka Sarz). We train
              creatives, help them improve their skills, and give them the
              business expertise required to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="alt1-bg">
        <div className="sz-container px-6 py-5 overflow-x-auto hide-scrollbar">
          <div className="flex items-center -mx-1.5 md:justify-center">
            {pills.map((pill, i) => (
              <div key={i} className="px-1.5">
                <Pill
                  label={pill}
                  active={pill === currentPill}
                  onClick={() => setCurrentPill(pill)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          <div className="lg:flex lg:flex-wrap lg:-mx-2 lg:items-center">
            <div className="lg:px-2 lg:w-1/2">
              <img
                alt="dummy"
                src="/images/dummy/img8.jpg"
                className="rounded-md w-full max-w-sm lg:max-w-lg mx-auto"
              />
            </div>

            <div className="lg:px-2 lg:w-1/2">
              <h3 className="mt-10 lg:mt-0 mb-6 secondary-font text-2xl text-center lg:text-left">
                An Incubator For African Creatives
              </h3>

              <p className="text-center lg:text-left mb-10">
                The Sarz Academy (TSA) is a non-governmental and non-profit
                organization, set up by Osabuohien Osaretin (aka Sarz). We train
                creatives, help them improve their skills, and give them the
                business expertise required to succeed.
              </p>

              <div className="w-48 mx-auto lg:ml-0">
                <Button>
                  <span className="secondary-font">Donate</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt3-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          <h2 className="secondary-font text-center text-3xl">
            Our Track Records
          </h2>

          <div className="mt-12 flex flex-wrap -mx-1.5">
            <div className="px-1.5 w-1/2 md:w-1/3 text-center mb-8">
              <h4 className="secondary-font text-2xl">19</h4>
              <span className="opacity-60">Years</span>
            </div>
            <div className="px-1.5 w-1/2 md:w-1/3 text-center mb-8">
              <h4 className="secondary-font text-2xl">$575M</h4>
              <span className="opacity-60">Dollars</span>
            </div>

            <div className="px-1.5 w-1/2 md:w-1/3 text-center mb-8">
              <h4 className="secondary-font text-2xl">1,288,689</h4>
              <span className="opacity-60">Donors</span>
            </div>
            <div className="px-1.5 w-1/2 md:w-1/3 text-center mb-8">
              <h4 className="secondary-font text-2xl">29,688</h4>
              <span className="opacity-60">Projects</span>
            </div>

            <div className="px-1.5 w-1/2 md:w-1/3 text-center">
              <h4 className="secondary-font text-2xl">175+</h4>
              <span className="opacity-60">Countries</span>
            </div>
            <div className="px-1.5 w-1/2 md:w-1/3 text-center">
              <h4 className="secondary-font text-2xl">333</h4>
              <span className="opacity-60">Companies</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-wrapper hero-wrapper-complete bg-repeat bg-center">
        <div className="sz-container px-6 py-8 md:py-24 relative z-10">
          <h2 className="secondary-font text-center text-3xl">
            Countdown To Next Session
          </h2>

          <h5 className="text-center text-lg mt-10 mb-14">21 JULY 2021</h5>

          <div className="flex flex-wrap text-5xl justify-center secondary-font text-center">
            <div>
              <h5 className="mb-4">03</h5>
              <p className="opacity-60 text-base primary-font">Months</p>
            </div>

            <div>
              <h5 className="mb-4">
                <span className="inline-block mx-3">:</span>
                08
                <span className="inline-block mx-3">:</span>
              </h5>
              <p className="opacity-60 text-base primary-font">Weeks</p>
            </div>

            <div>
              <h5 className="mb-4">90</h5>
              <p className="opacity-60 text-base primary-font">Days</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data

    return {
      props: { config: { menu, facebook, instagram, twitter } },
    }
  } catch (err) {
    return {
      props: {
        config: {
          menu: [],
          facebook: '',
          instagram: '',
          twitter: '',
        },
      },
    }
  }
}

export default Support
