import React, { FC } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import jsonp from 'jsonp'

import {
  Layout,
  Button,
  Image,
  Slider,
  ModuleCard,
  DonationCard,
  NewsletterForm,
  TestimonialCard,
} from 'src/components'
import { theme } from 'src/styles/theme'
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

const handleDonation = async ({ amount }: DonationFormData) => {
  if (typeof window === 'undefined') {
    return
  }

  const handler = (window as any).PaystackPop.setup({
    key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    email: 'donations@thesarzacademy.com',
    amount: +amount * 100,
    // label: 'Optional string that replaces customer email',
    onClose: function () {
      alert('Window closed.')
    },
    callback: function ({ reference }: any) {
      alert(`Payment complete! Reference: ${reference}`)
    },
  })

  handler.openIframe()
}

const handleNewsletterSubmission = async ({ email }: NewsletterFormData) => {
  const baseURL = process.env.NEXT_PUBLIC_MAILCHIMP_URL
  const ID = process.env.NEXT_PUBLIC_MAILCHIMP_ID
  const U = process.env.NEXT_PUBLIC_MAILCHIMP_U

  const url = `${baseURL}?MERGE0=${email}&id=${ID}&u=${U}`

  const errorMessageMaxLength = 58 + email.length

  jsonp(
    url,
    {
      param: 'c',
    },
    (err, { result, msg }) => {
      if (err) {
        alert(err)
      } else {
        alert(`${result}: ${msg.substr(0, errorMessageMaxLength)}`)
      }
    }
  )
}

const Home: FC<Props> = ({ config, content = {} }) => {
  const router = useRouter()
  const {
    section_1_title = '',
    section_1_description = '',
    section_1_image = '',
    section_1_btn_label = '',
    section_1_btn_link = '',
    section_2_title = '',
    section_2_description = '',
    section_2_image = '',
    section_2_btn_label = '',
    section_2_btn_link = '',
    section_3_title = '',
    section_3_description = '',
    section_3_items = [],
    testimonials = [],
    section_4_title = '',
    section_4_description = '',
    section_4_image = '',
    section_4_btn_label = '',
    section_4_btn_link = '',
  } = content as HomeProps

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
            <div className="mb-16 md:mb-0 mx-auto max-w-xs sm:max-w-sm md:px-2.5 md:w-1/2">
              <img
                src={section_1_image}
                alt={section_1_title}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="md:px-2.5 md:w-1/2">
              {!!section_1_title && (
                <h1 className="secondary-font text-4xl sm:w-72 sm:mx-auto sm:text-center md:text-left">
                  {section_1_title}
                </h1>
              )}

              {!!section_1_description && (
                <p className="mt-7 mb-10 sm:w-72 sm:mx-auto sm:text-center md:text-left">
                  {section_1_description}
                </p>
              )}

              {!!section_1_btn_label && (
                <>
                  <div className="mx-2 md:hidden">
                    <Button
                      size="large"
                      onClick={() => navHelper(section_1_btn_link)}
                    >
                      <span className="secondary-font">
                        {section_1_btn_label}
                      </span>
                    </Button>
                  </div>

                  <div className="hidden md:block md:w-72 md:mx-auto">
                    <Button onClick={() => navHelper(section_1_btn_link)}>
                      <span className="secondary-font">
                        {section_1_btn_label}
                      </span>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <div className="md:flex md:flex-wrap md:-mx-2">
            {!!section_2_image && (
              <div className="mb-16 md:mb-0 md:w-1/2 lg:w-2/5 md:px-2 md:order-2">
                <div className="w-4/5 sm:w-64 md:w-72 mx-auto h-72 md:h-80 px-2 md:pl-0">
                  <Image src={section_2_image} />
                </div>
              </div>
            )}

            <div className="md:w-1/2 lg:w-3/5 md:px-2">
              {!!section_2_title && (
                <h2 className="secondary-font text-4xl">{section_2_title}</h2>
              )}

              {!!section_2_description && (
                <p className="mt-7 mb-10 lg:w-96">{section_2_description}</p>
              )}

              <div className="md:mx-0 mb-12 hidden xl:block">
                <div className="flex flex-wrap">
                  <div className="w-48 flex-shrink-0 mr-4 mb-3">
                    <Button
                      borderColor="#263263"
                      textColor={colors.light}
                      backgroundColor="#263263"
                    >
                      <span className="secondary-font">Innovation</span>
                    </Button>
                  </div>

                  <div className="w-48 flex-shrink-0 mr-4 mb-3">
                    <Button
                      borderColor="#95587d"
                      textColor={colors.light}
                      backgroundColor="#95587d"
                    >
                      <span className="secondary-font">Creativity</span>
                    </Button>
                  </div>

                  <div className="w-48 flex-shrink-0 mr-4 mb-3">
                    <Button
                      borderColor="#b17565"
                      textColor={colors.light}
                      backgroundColor="#b17565"
                    >
                      <span className="secondary-font">Leadership</span>
                    </Button>
                  </div>

                  <div className="w-48 flex-shrink-0 mr-4 mb-3">
                    <Button
                      borderColor="#923623"
                      textColor={colors.light}
                      backgroundColor="#923623"
                    >
                      <span className="secondary-font">Advocacy</span>
                    </Button>
                  </div>

                  <div className="w-48 flex-shrink-0 mr-4 mb-3">
                    <Button
                      borderColor="#315c5c"
                      textColor={colors.light}
                      backgroundColor="#315c5c"
                    >
                      <span className="secondary-font">Legacy</span>
                    </Button>
                  </div>
                </div>
              </div>

              {!!section_2_btn_label && (
                <div className="w-52 mx-auto md:ml-0">
                  <Button
                    textColor={colors.light}
                    backgroundColor={colors.primary}
                    onClick={() => navHelper(section_2_btn_link)}
                  >
                    <span className="secondary-font">
                      {section_2_btn_label}
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          {!!section_3_title && (
            <h2 className="secondary-font text-center text-4xl">
              {section_3_title}
            </h2>
          )}

          {!!section_3_description && (
            <p className="mt-7 mb-10 text-center md:max-w-sm md:mx-auto">
              {section_3_description}
            </p>
          )}

          {!!section_3_items.length && (
            <div className="-mx-6 ">
              <Slider>
                {section_3_items.map(({ id, title, description, imageURL }) => (
                  <div key={id} className="ml-6">
                    <div className="w-72">
                      <ModuleCard
                        title={title}
                        bgImageSrc={imageURL}
                        content={description}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 pt-8 pb-2 md:py-16">
          <h2 className="secondary-font text-center text-4xl mx-auto max-w-xs md:max-w-sm">
            Over 500 creatives trust The Sarz Academy
          </h2>

          {!!testimonials.length && (
            <div className="hero-wrapper hero-wrapper-2 mt-28 -mx-6 px-6 md:max-w-2xl lg:max-w-3xl md:mx-auto md:border md:rounded-md md:border-gray-800">
              <div className="relative z-10 transform -translate-y-16 md:-translate-y-10">
                <Slider settings={testimonialSlideSettings}>
                  {testimonials.map(
                    ({ id, author, description, designation, imageURL }) => (
                      <div key={id} className="px-2">
                        <TestimonialCard
                          name={author}
                          imageSrc={imageURL}
                          content={description}
                          designation={designation}
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
              {!!section_4_title && (
                <h2 className="secondary-font text-4xl">{section_4_title}</h2>
              )}

              {!!section_4_description && (
                <p className="mt-7 mb-10">{section_4_description}</p>
              )}

              {!!section_4_btn_label && (
                <div className="w-52 mx-auto md:ml-0">
                  <Button
                    textColor={colors.primary}
                    borderColor={colors.light}
                    backgroundColor={colors.light}
                    onClick={() => navHelper(section_4_btn_link)}
                  >
                    <span className="secondary-font">
                      {section_4_btn_label}
                    </span>
                  </Button>
                </div>
              )}
            </div>

            {!!section_4_image && (
              <div className="mt-12 md:mt-0 md:w-1/2 md:px-2">
                <img
                  className="w-full max-w-xs mx-auto"
                  src={section_4_image}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <h2 className="secondary-font text-center text-4xl">Get Involved</h2>

          <p className="mt-7 mb-10 text-center md:max-w-sm md:mx-auto">
            There are many ways to support TSA’s work, one of which is to make a
            donation.
          </p>

          <DonationCard handleSubmit={handleDonation} />
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <h2 className="secondary-font text-center text-4xl">Newsletter</h2>

          <p className="mt-7 mb-5 text-center md:max-w-sm md:mx-auto">
            The weekly digest of the best of The Sarz Academy, created by the
            best.
          </p>

          <div className="hero-wrapper hero-wrapper-2 -mx-6 px-6 pt-14 pb-20 md:pb-32">
            <div className="relative z-10">
              <NewsletterForm
                btnLabel="Subscribe"
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
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const {
      section_1_title = '',
      section_1_description = '',
      section_1_image = '',
      section_1_btn_label = '',
      section_1_btn_link = '',
      section_2_title = '',
      section_2_description = '',
      section_2_image = '',
      section_2_btn_label = '',
      section_2_btn_link = '',
      section_3_title = '',
      section_3_description = '',
      section_3_items = [],
      testimonials = [],
      section_4_title = '',
      section_4_description = '',
      section_4_image = '',
      section_4_btn_label = '',
      section_4_btn_link = '',
    } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: {
          section_1_title,
          section_1_description,
          section_1_image,
          section_1_btn_label,
          section_1_btn_link,
          section_2_title,
          section_2_description,
          section_2_image,
          section_2_btn_label,
          section_2_btn_link,
          section_3_title,
          section_3_description,
          section_3_items,
          testimonials,
          section_4_title,
          section_4_description,
          section_4_image,
          section_4_btn_label,
          section_4_btn_link,
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
          section_1_title: '',
          section_1_description: '',
          section_1_image: '',
          section_1_btn_label: '',
          section_1_btn_link: '',
          section_2_title: '',
          section_2_description: '',
          section_2_image: '',
          section_2_btn_label: '',
          section_2_btn_link: '',
          section_3_title: '',
          section_3_description: '',
          section_3_items: [],
          testimonials: [],
          section_4_title: '',
          section_4_description: '',
          section_4_image: '',
          section_4_btn_label: '',
          section_4_btn_link: '',
        },
      },
    }
  }
}

export default Home
