import React, { FC } from 'react'
import { RichText } from 'prismic-reactjs'

import { prismicClient } from 'src/setup'
import { AboutUsProps } from 'src/interfaces/pages'
import { ContactFormData } from 'src/interfaces/forms'
import { LayoutProps } from 'src/interfaces/navigation'
import { Layout, Slider, Image, ContactForm } from 'src/components'

type Props = {
  config: LayoutProps
  content: AboutUsProps
}

const handleContactForm = async ({ name, email, message }: ContactFormData) => {
  console.log('contact form submitted: ', { name, email, message })
}

const AboutUs: FC<Props> = ({ config, content }) => {
  const {
    title,
    youtube_video_id,
    description,
    mission,
    vision,
    carousel,
    section_1_title,
    section_1_description,
    section_2_title,
    section_2_description,
    section_2_btn_label,
    trustees,
  } = content

  const trustee1 = trustees.value?.[0].image.value?.main.url || ''
  const trustee2 = trustees.value?.[1].image.value?.main.url || ''
  const trustee3 = trustees.value?.[2].image.value?.main.url || ''

  return (
    <Layout config={config}>
      <section className="hero-wrapper hero-wrapper-1 pt-32 md:pb-10 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            {!!title.value && (
              <h1 className="secondary-font text-4xl text-center sm:w-72 sm:mx-auto">
                {title.value}
              </h1>
            )}

            <div className="mt-8 md:mt-16 mb-14 w-full h-44 sm:h-64 md:h-80 lg:h-96 border border-gray-500 rounded-md md:max-w-xl lg:max-w-2xl md:mx-auto">
              {!!youtube_video_id.value && (
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md"
                  src={`https://www.youtube.com/embed/${youtube_video_id.value}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>

            {!!description.value && (
              <p className="text-center md:hidden">{description.value}</p>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg md:hidden">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">Mission</h2>

          {!!mission.value && (
            <p className="mt-7 text-center">{mission.value}</p>
          )}
        </div>
      </section>

      <section className="primary-bg md-hero-wrapper">
        <div className="sz-container px-6 py-8 md:pt-16 md:pb-0 md:relative md:z-10">
          {!!description.value && (
            <p className="text-center hidden md:block md:max-w-lg md:mx-auto md:mt-4 md:mb-20">
              {description.value}
            </p>
          )}

          <div className="md:flex md:flex-wrap md:-mx-2.5 md:mb-28">
            <div className="hidden md:block md:w-1/2 md:px-2.5">
              <h2 className="secondary-font text-center text-4xl">Mission</h2>

              {!!mission.value && (
                <p className="mt-7 text-center md:max-w-sm md:mx-auto">
                  {mission.value}
                </p>
              )}
            </div>

            <div className="md:w-1/2 md:px-2.5">
              <h2 className="secondary-font text-center text-4xl">Vision</h2>

              {!!vision.value && (
                <p className="mt-7 mb-16 md:mb-0 text-center md:max-w-sm md:mx-auto">
                  {vision.value}
                </p>
              )}
            </div>
          </div>

          <div className="primary-bg -mx-6 mb-4 md:mb-0 md:pt-4 md:pb-16">
            {!!carousel.value?.length && (
              <Slider>
                {carousel.value.map(({ image }, i) => (
                  <div key={i} className="mr-4">
                    <img
                      src={image.value?.image.url}
                      alt={image.value?.image.name}
                      className="w-auto h-52 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </section>

      <section className="alt1-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
            <div className="md:w-1/2 md:px-2.5 md:order-1">
              {!!section_1_title.value && (
                <h2 className="secondary-font text-center md:text-left text-4xl md:max-w-sm md:ml-auto">
                  {section_1_title.value}
                </h2>
              )}

              {!!section_1_description.value && (
                <p className="mt-7 mb-10 md:mb-0 text-center md:text-left md:max-w-sm md:ml-auto">
                  {section_1_description.value}
                </p>
              )}
            </div>

            <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
              <div className="w-36 h-40 mx-auto">
                <Image src={trustee1} />
              </div>

              <div className="relative -mt-12 flex flex-wrap justify-center">
                <div className="w-36 h-40 flex-shrink-0 mr-2">
                  <Image src={trustee2} />
                </div>

                <div className="w-36 h-40 flex-shrink-0">
                  <Image src={trustee3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {trustees.value?.map(({ description1, background_color, name }, i) => {
        return (
          <section key={i} style={{ backgroundColor: background_color.value }}>
            <div className="sz-container px-6 py-8 md:py-24">
              <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
                <div className="md:w-1/2 md:px-2.5 md:order-1">
                  {!!name.value && (
                    <h2 className="secondary-font text-4xl md:max-w-sm md:ml-auto">
                      {name.value}
                    </h2>
                  )}

                  {description1.value && (
                    <div className="mt-7 mb-10 md:mb-0 md:max-w-sm md:ml-auto">
                      <RichText render={description1.value as any} />
                    </div>
                  )}
                </div>

                <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
                  <div
                    className={`w-36 h-40 mx-auto ${
                      i !== 0 ? 'opacity-30' : 'relative z-10'
                    }`}
                  >
                    <Image src={trustee1} />
                  </div>

                  <div className="relative -mt-12 flex flex-wrap justify-center">
                    <div
                      className={`w-36 h-40 flex-shrink-0 mr-2 ${
                        i !== 1 ? 'opacity-30' : ''
                      }`}
                    >
                      <Image src={trustee2} />
                    </div>

                    <div
                      className={`w-36 h-40 flex-shrink-0 ${
                        i !== 2 ? 'opacity-30' : ''
                      }`}
                    >
                      <Image src={trustee3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          {!!section_2_title.value && (
            <h2 className="secondary-font text-center text-4xl">
              {section_2_title.value}
            </h2>
          )}

          {!!section_2_description.value && (
            <p className="mt-7 mb-10 md:mb-16 text-center md:max-w-sm md:mx-auto">
              {section_2_description.value}
            </p>
          )}

          <div className="-mx-6 md:mx-0">
            <ContactForm
              handleSubmit={handleContactForm}
              btnLabel={section_2_btn_label.value}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const configPromise = prismicClient.getByUID('config', 'config')
    const contentPromise = prismicClient.getByUID('about', 'about')

    const [configRes, contentRes] = await Promise.all([
      configPromise,
      contentPromise,
    ])

    const {
      data: { config },
    } = configRes
    const {
      data: { about: content },
    } = contentRes

    return {
      props: { config, content },
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
        content: {
          title: {},
          youtube_video_id: {},
          description: {},
          mission: {},
          vision: {},
          carousel: {},
          section_1_title: {},
          section_1_description: {},
          section_2_title: {},
          section_2_description: {},
          section_2_btn_label: {},
          trustees: {},
        },
      },
    }
  }
}

export default AboutUs
