import React, { FC } from 'react'
import axios from 'axios'

import { AboutUsProps } from 'src/interfaces/pages'
import { ContactFormData } from 'src/interfaces/forms'
import { LayoutProps } from 'src/interfaces/navigation'
import { Layout, Slider, Image, ContactForm } from 'src/components'

type Props = {
  config: LayoutProps
  content: AboutUsProps
}
const trusteesBg = ['#0a2540', '#021017', '#1f171b', '#220415']
const trusteesSlideSettings = {
  fade: true,
  autoplay: true,
  cssEase: 'linear',
  className: 'slider',
  adaptiveHeight: true,
  variableWidth: false,
}

const handleContactForm = async ({ name, email, message }: ContactFormData) => {
  console.log('contact form submitted: ', { name, email, message })
}

const AboutUs: FC<Props> = ({ config, content }) => {
  const {
    title = '',
    description = '',
    youtube_id = '',
    mission = '',
    vision = '',
    gallery_images = '',
    spotlight_title = '',
    spotlight_image = '',
    spotlight_description = '',
    trustees = [],
  } = content as AboutUsProps

  const carousel = gallery_images.split(',')

  return (
    <Layout config={config}>
      <section className="hero-wrapper hero-wrapper-1 pt-32 md:pb-10 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            {!!title && (
              <h1 className="secondary-font text-4xl text-center sm:w-96 sm:mx-auto">
                {title}
              </h1>
            )}

            <div className="mt-8 md:mt-16 mb-14 md:mb-0 w-full h-44 sm:h-64 md:h-80 lg:h-96 border border-gray-500 rounded-md md:max-w-xl lg:max-w-2xl md:mx-auto">
              {!!youtube_id && (
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md"
                  src={`https://www.youtube.com/embed/${youtube_id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>

            {!!description && (
              <p className="text-center md:hidden">{description}</p>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg md:hidden">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">Mission</h2>

          {!!mission && <p className="mt-7 text-center">{mission}</p>}
        </div>
      </section>

      <section className="primary-bg md-hero-wrapper">
        <div className="sz-container px-6 py-8 md:pt-10 md:pb-0 md:relative md:z-10">
          {!!description && (
            <p className="text-center hidden md:block md:max-w-lg md:mx-auto md:mb-20">
              {description}
            </p>
          )}

          <div className="md:flex md:flex-wrap md:-mx-2.5 md:mb-28">
            <div className="hidden md:block md:w-1/2 md:px-2.5">
              <h2 className="secondary-font text-center text-4xl">Mission</h2>

              {!!mission && (
                <p className="mt-7 text-center md:max-w-sm md:mx-auto">
                  {mission}
                </p>
              )}
            </div>

            <div className="md:w-1/2 md:px-2.5">
              <h2 className="secondary-font text-center text-4xl">Vision</h2>

              {!!vision && (
                <p className="mt-7 mb-16 md:mb-0 text-center md:max-w-sm md:mx-auto">
                  {vision}
                </p>
              )}
            </div>
          </div>

          <div className="primary-bg -mx-6 mb-4 md:mb-0 md:pt-4 md:pb-16">
            {!!carousel?.length && (
              <Slider>
                {carousel.map((str, i) => (
                  <div key={i} className="mr-4">
                    <div className="w-40 h-52">
                      <Image src={str.trim()} />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </section>

      {!!trustees.length && (
        <Slider settings={trusteesSlideSettings}>
          {trustees.map(({ id, name, summary, imageURL }, i) => {
            return (
              <div key={id}>
                <section style={{ backgroundColor: trusteesBg[i] }}>
                  <div className="sz-container px-6 py-8 md:py-24">
                    <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
                      <div className="mb-10 md:mb-0 md:w-1/2 md:px-2.5">
                        <img
                          alt={name}
                          src={imageURL}
                          className="w-72 h-auto object-cover mx-auto"
                        />
                      </div>

                      <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 text-center md:text-left">
                        {!!name && (
                          <h2 className="secondary-font text-4xl md:max-w-sm md:mx-auto">
                            {name}
                          </h2>
                        )}

                        {summary && (
                          <div className="mt-7 md:max-w-sm md:mx-auto">
                            <p>{summary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )
          })}
        </Slider>
      )}

      <section className="hero-wrapper hero-wrapper-2">
        <div className="sz-container px-6 py-8 md:py-24 relative z-10">
          <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
            <div className="mb-10 md:mb-0 md:w-1/2 md:px-2.5">
              <img
                alt={spotlight_title}
                src={spotlight_image}
                className="w-72 h-auto object-cover mx-auto rounded-md"
              />
            </div>

            <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 text-center md:text-left">
              {!!spotlight_title && (
                <h2 className="secondary-font text-4xl md:max-w-sm md:mx-auto">
                  {spotlight_title}
                </h2>
              )}

              {spotlight_description && (
                <div className="mt-7 md:max-w-sm md:mx-auto">
                  <p>{spotlight_description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-24">
          <h2 className="secondary-font text-center text-4xl">Get in Touch</h2>

          <p className="mt-7 mb-10 md:mb-16 text-center md:max-w-sm md:mx-auto">
            Let us know your questions, suggestions and concerns by filling out
            the contact below.
          </p>

          <div className="-mx-6 md:mx-0">
            <ContactForm handleSubmit={handleContactForm} btnLabel="Submit" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about`)
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const {
      title = '',
      description = '',
      youtube_id = '',
      mission = '',
      vision = '',
      gallery_images = '',
      spotlight_title = '',
      spotlight_image = '',
      spotlight_description = '',
      trustees = [],
    } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: {
          title,
          description,
          youtube_id,
          mission,
          vision,
          gallery_images,
          spotlight_title,
          spotlight_image,
          spotlight_description,
          trustees,
        },
      },
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
        content: {
          title: '',
          description: '',
          youtube_id: '',
          mission: '',
          vision: '',
          gallery_images: '',
          spotlight_title: '',
          spotlight_image: '',
          spotlight_description: '',
          trustees: [],
        },
      },
    }
  }
}

export default AboutUs
