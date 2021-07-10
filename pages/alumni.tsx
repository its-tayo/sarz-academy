import React, { FC } from 'react'

import { Layout } from 'src/components'
import { prismicClient } from 'src/setup'
import { LayoutProps } from 'src/interfaces/navigation'

type Props = {
  config: LayoutProps
}

const Alumni: FC<Props> = ({ config }) => {
  return (
    <Layout config={config}>
      <section className="primary-bg pt-32">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
              <div className="md:w-1/2 lg:w-2/5 md:px-2.5">
                <h1 className="secondary-font text-4xl lg:text-6xl sm:w-60 lg:w-80 sm:mx-auto md:ml-0 text-center md:text-left">
                  Alumni of the Sarz Academy
                </h1>
              </div>

              <div className="mt-10 md:mt-0 md:w-1/2 lg:w-3/5 md:px-2.5">
                <img
                  alt="dummy"
                  src="/images/dummy/img8.jpg"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <div className="mb-16">
            <h4 className="secondary-font text-3xl text-center xl:text-left mb-10 xl:mb-16">
              Class of 2019
            </h4>

            <div className="md:flex md:flex-wrap md:-mx-5">
              <div className="mb-12 xl:mb-0 md:px-5 md:w-full xl:w-1/4 xl:order-1">
                <img
                  alt="dummy"
                  src="/images/dummy/img8.jpg"
                  className="w-full h-auto object-cover md:max-w-sm md:mx-auto"
                />
              </div>

              <div className="mb-12 md:mb-0 md:px-5 md:w-1/3 xl:order-3">
                <div className="mb-5">
                  <img
                    alt="dummy"
                    src="/images/dummy/img8.jpg"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="secondary-font text-3xl">Born for this</h3>
                <p>Listen to the Class Project</p>
              </div>

              <div className="md:px-5 md:w-2/3 xl:w-1/3 xl:flex-1 xl:order-2">
                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="secondary-font text-3xl text-center xl:text-left mb-10 xl:mb-16">
              Class of 2020
            </h4>

            <div className="md:flex md:flex-wrap md:-mx-5">
              <div className="mb-12 xl:mb-0 md:px-5 md:w-full xl:w-1/4 xl:order-1">
                <img
                  alt="dummy"
                  src="/images/dummy/img8.jpg"
                  className="w-full h-auto object-cover md:max-w-sm md:mx-auto"
                />
              </div>

              <div className="mb-12 md:mb-0 md:px-5 md:w-1/3 xl:order-3">
                <div className="mb-5">
                  <img
                    alt="dummy"
                    src="/images/dummy/img8.jpg"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="secondary-font text-3xl">Born for this</h3>
                <p>Listen to the Class Project</p>
              </div>

              <div className="md:px-5 md:w-2/3 xl:w-1/3 xl:flex-1 xl:order-2">
                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">
                    Chimobi Adewale
                  </div>
                  <div className="px-2 w-1/2">Producer</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Bernard Ogule</div>
                  <div className="px-2 w-1/2">Instrumentalist</div>
                </div>

                <div className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown">
                  <div className="secondary-font px-2 w-1/2">Brian Collins</div>
                  <div className="px-2 w-1/2">CCO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const configPromise = prismicClient.getByUID('config', 'config')
    const [configRes] = await Promise.all([configPromise])
    const {
      data: { config },
    } = configRes

    return {
      props: { config },
    }
  } catch (err) {
    return {
      props: {
        config: {
          menu_items: {},
          footer_text: {},
          facebook_url: {},
          instagram_url: {},
          twitter_url: {},
          copyright: {},
        },
        content: {},
      },
    }
  }
}

export default Alumni
