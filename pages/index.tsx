import React, { FC } from 'react'
import { useRouter } from 'next/router'

import {
  Layout,
  Button,
  Image,
  Slider,
  ModuleCard,
  // SessionCard,
  DonationCard,
  NewsletterForm,
  TestimonialCard,
} from 'src/components'
import { theme } from 'src/styles/theme'
import { prismicClient } from 'src/setup'
import { HomeProps } from 'src/interfaces/pages'
import { LayoutProps } from 'src/interfaces/navigation'
import { DonationFormData, NewsletterFormData } from 'src/interfaces/forms'

type Props = {
  config: LayoutProps
  content: HomeProps
}

const { colors } = theme
const testimonialSlideSettings = {
  dots: true,
  infinite: false,
  className: 'slider',
  variableWidth: false,
}
// const sessionsSlideSettings = {
//   centerMode: true,
//   variableWidth: true,
//   className: 'slider variable-width center',
// }

const handleDonation = async ({ amount }: DonationFormData) => {
  console.log('donation form submitted: ', amount)
}

const handleNewsletterSubmission = async ({ email }: NewsletterFormData) => {
  console.log('newsletter form submitted: ', email)
}

const Home: FC<Props> = ({ config, content }) => {
  const router = useRouter()
  const {
    hero_title,
    hero_description,
    hero_btn_label,
    hero_btn_link,
    hero_images,
    section_2_title,
    section_2_description,
    section_2_image,
    section_2_btn_label,
    section_2_btn_link,
    section_2_labels_1,
    section_2_labels_2,
    section_3_title,
    section_3_description,
    section_4_title,
    section_5_title,
    section_5_description,
    section_5_btn_label,
    section_5_btn_link,
    section_5_image,
    section_6_title,
    section_6_description,
    section_7_title,
    section_7_description,
    section_7_btn_label,
    carousel_cards,
    testimonials,
  } = content

  const navHelper = (path?: string) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <Layout config={config}>
      <section className="hero-wrapper hero-wrapper-1 pt-32 md:pt-48 md:pb-12 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8 md:flex md:flex-wrap md:items-center md:-mx-2.5">
            <div className="md:px-2.5 md:w-1/2 md:order-1">
              {!!hero_title.value && (
                <h1 className="secondary-font text-4xl sm:w-72 sm:mx-auto md:mr-0 sm:text-center md:text-left">
                  {hero_title.value}
                </h1>
              )}

              {!!hero_description.value && (
                <p className="mt-7 mb-10 sm:w-72 sm:mx-auto md:mr-0 sm:text-center md:text-left">
                  {hero_description.value}
                </p>
              )}

              {!!hero_btn_label.value && (
                <>
                  <div className="mx-2 md:hidden">
                    <Button
                      size="large"
                      onClick={() => navHelper(hero_btn_link.value)}
                    >
                      <span className="secondary-font">
                        {hero_btn_label.value}
                      </span>
                    </Button>
                  </div>

                  <div className="hidden md:block md:w-72 md:ml-auto">
                    <Button onClick={() => navHelper(hero_btn_link.value)}>
                      <span className="secondary-font">
                        {hero_btn_label.value}
                      </span>
                    </Button>
                  </div>
                </>
              )}
            </div>

            {!!hero_images.value && (
              <div className="mt-16 md:mt-0 relative sm:max-w-xs sm:mx-auto md:px-2.5 md:w-1/2 md:order-0">
                <div className="-mr-3">
                  <div className="flex -mx-2 justify-end">
                    {!!hero_images.value[0].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[0].image.value.image.url}
                        />
                      </div>
                    )}

                    {!!hero_images.value[1].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[1].image.value.image.url}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute -ml-3 -mt-10">
                  <div className="flex -mx-2">
                    {!!hero_images.value[2].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[2].image.value.image.url}
                        />
                      </div>
                    )}

                    {!!hero_images.value[3].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[3].image.value.image.url}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative -mr-3 mt-16 z-10">
                  <div className="flex -mx-2 justify-end">
                    {!!hero_images.value[4].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[4].image.value.image.url}
                        />
                      </div>
                    )}

                    {!!hero_images.value[5].image.value && (
                      <div className="w-36 h-40 px-2">
                        <Image
                          src={hero_images.value[5].image.value.image.url}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <div className="md:flex md:flex-wrap md:-mx-2">
            <div className="md:w-1/2 md:px-2">
              {!!section_2_title.value && (
                <h2 className="secondary-font text-4xl">
                  {section_2_title.value}
                </h2>
              )}

              {!!section_2_description.value && (
                <p className="mt-7 mb-10">{section_2_description.value}</p>
              )}

              <div className="marquee-wrapper -mx-6 sm:-mx-12 md:mx-0 mb-14 overflow-hidden">
                {!!section_2_labels_1.value?.length && (
                  <div className="marquee-1 px-6 mb-3 flex">
                    {section_2_labels_1.value.map(
                      ({ label, color_code }, i) => (
                        <div key={i} className="w-48 flex-shrink-0 mr-4">
                          <Button
                            textColor={colors.light}
                            borderColor={color_code.value}
                            backgroundColor={color_code.value}
                          >
                            <span className="secondary-font">
                              {label.value}
                            </span>
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                )}

                {!!section_2_labels_2.value?.length && (
                  <div className="marquee-2 direction-rtl px-6 flex">
                    {section_2_labels_2.value.map(
                      ({ label, color_code }, i) => (
                        <div key={i} className="w-48 flex-shrink-0 ml-4">
                          <Button
                            textColor={colors.light}
                            borderColor={color_code.value}
                            backgroundColor={color_code.value}
                          >
                            <span className="secondary-font">
                              {label.value}
                            </span>
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {!!section_2_btn_label.value && (
                <div className="w-52 mx-auto md:ml-0">
                  <Button
                    textColor={colors.light}
                    backgroundColor={colors.primary}
                    onClick={() => navHelper(section_2_btn_link.value)}
                  >
                    <span className="secondary-font">
                      {section_2_btn_label.value}
                    </span>
                  </Button>
                </div>
              )}
            </div>

            {!!section_2_image.value && (
              <div className="mt-16 md:mt-0 md:w-1/2 md:px-2">
                <div className="w-4/5 sm:w-64 md:w-72 mx-auto md:mr-0 h-72 md:h-80 px-2 md:pl-0">
                  <Image src={section_2_image.value.main.url} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          {!!section_3_title.value && (
            <h2 className="secondary-font text-center text-4xl">
              {section_3_title.value}
            </h2>
          )}

          {!!section_3_description.value && (
            <p className="mt-7 mb-10 text-center md:max-w-sm md:mx-auto">
              {section_3_description.value}
            </p>
          )}

          {!!carousel_cards.value?.length && (
            <div className="-mx-6 ">
              <Slider>
                {carousel_cards.value.map(
                  ({ title, description, background_color, icon }, i) => (
                    <div key={i} className="ml-6">
                      <div className="w-72">
                        <ModuleCard
                          title={title.value || ''}
                          imageSrc={icon.value?.image.url}
                          content={description.value || ''}
                          backgroundColor={background_color.value}
                        />
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          )}
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 pt-8 pb-2 md:py-16">
          {!!section_4_title.value && (
            <h2 className="secondary-font text-center text-4xl mx-auto max-w-xs md:max-w-sm">
              {section_4_title.value}
            </h2>
          )}

          {!!testimonials.value?.length && (
            <div className="hero-wrapper hero-wrapper-2 mt-28 -mx-6 px-6 md:max-w-2xl lg:max-w-3xl md:mx-auto md:border md:rounded-md md:border-gray-800">
              <div className="relative z-10 transform -translate-y-16 md:-translate-y-10">
                <Slider settings={testimonialSlideSettings}>
                  {testimonials.value.map(
                    ({ author, content, designation, image }, i) => (
                      <div key={i} className="px-2">
                        <TestimonialCard
                          name={author.value || ''}
                          content={content.value || ''}
                          designation={designation.value || ''}
                          imageSrc={image.value?.image.url || ''}
                        />
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <div className="md:flex md:flex-wrap md:items-center md:-mx-2">
            <div className="md:w-1/2 md:px-2">
              {!!section_5_title.value && (
                <h2 className="secondary-font text-4xl">
                  {section_5_title.value}
                </h2>
              )}

              {!!section_5_description.value && (
                <p className="mt-7 mb-10">{section_5_description.value}</p>
              )}

              {!!section_5_btn_label.value && (
                <div className="w-52 mx-auto md:ml-0">
                  <Button
                    textColor={colors.primary}
                    borderColor={colors.light}
                    backgroundColor={colors.light}
                    onClick={() => navHelper(section_5_btn_link.value)}
                  >
                    <span className="secondary-font">
                      {section_5_btn_label.value}
                    </span>
                  </Button>
                </div>
              )}
            </div>

            {!!section_5_image.value && (
              <div className="mt-12 md:mt-0 md:w-1/2 md:px-2">
                <img
                  className="w-full max-w-xs mx-auto"
                  src={section_5_image.value.main.url}
                  alt={section_5_image.value.main.alt || ''}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          {!!section_6_title.value && (
            <h2 className="secondary-font text-center text-4xl">
              {section_6_title.value}
            </h2>
          )}

          {!!section_6_description.value && (
            <p className="mt-7 mb-10 text-center md:max-w-sm md:mx-auto">
              {section_6_description.value}
            </p>
          )}

          <DonationCard handleSubmit={handleDonation} />
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          {!!section_7_title.value && (
            <h2 className="secondary-font text-center text-4xl">
              {section_7_title.value}
            </h2>
          )}

          {!!section_7_description.value && (
            <p className="mt-7 mb-5 text-center md:max-w-sm md:mx-auto">
              {section_7_description.value}
            </p>
          )}

          <div className="hero-wrapper hero-wrapper-2 -mx-6 px-6 pt-14 pb-20 md:pb-32">
            <div className="relative z-10">
              <NewsletterForm
                btnLabel={section_7_btn_label.value}
                handleSubmit={handleNewsletterSubmission}
              />
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
    const contentPromise = prismicClient.getByUID('home', 'home')

    const [configRes, contentRes] = await Promise.all([
      configPromise,
      contentPromise,
    ])

    const {
      data: { config },
    } = configRes
    const {
      data: { home: content },
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
          hero_title: {},
          hero_description: {},
          hero_btn_label: {},
          hero_btn_link: {},
          hero_images: {},
          section_2_title: {},
          section_2_description: {},
          section_2_image: {},
          section_2_btn_label: {},
          section_2_btn_link: {},
          section_2_labels_1: {},
          section_2_labels_2: {},
          section_3_title: {},
          section_3_description: {},
          section_4_title: {},
          section_5_title: {},
          section_5_description: {},
          section_5_btn_label: {},
          section_5_btn_link: {},
          section_5_image: {},
          section_6_title: {},
          section_6_description: {},
          section_7_title: {},
          section_7_description: {},
          section_7_btn_label: {},
          carousel_cards: {},
          testimonials: {},
        },
      },
    }
  }
}

export default Home
