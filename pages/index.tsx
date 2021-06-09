import React, { FC } from 'react'

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
import { DonationFormData, NewsletterFormData } from 'src/interfaces/forms'

const { colors } = theme
const testimonialSlideSettings = {
  dots: true,
  infinite: false,
  className: 'slider',
  variableWidth: false,
}

const handleDonation = async ({ amount }: DonationFormData) => {
  console.log('donation form submitted: ', amount)
}

const handleNewsletterSubmission = async ({ email }: NewsletterFormData) => {
  console.log('newsletter form submitted: ', email)
}

const Home: FC = () => {
  return (
    <Layout>
      <section className="hero-wrapper hero-wrapper-1 pt-32 md:pt-0 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <h1 className="secondary-font text-4xl sm:w-72 sm:mx-auto sm:text-center">
              An Incubator For African Creatives
            </h1>
            <p className="mt-7 mb-10 sm:w-72 sm:mx-auto sm:text-center">
              Break into the music industry through practical and hands-on
              sessions led by industry experts.
            </p>

            <div className="mx-2">
              <Button size="large">
                <span className="secondary-font">Apply Now</span>
              </Button>
            </div>

            <div className="mt-16 relative sm:max-w-xs sm:mx-auto">
              <div className="-mr-3">
                <div className="flex -mx-2 justify-end">
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img1.jpg" />
                  </div>
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img2.jpg" />
                  </div>
                </div>
              </div>

              <div className="absolute -ml-3 -mt-10">
                <div className="flex -mx-2">
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img3.jpg" />
                  </div>
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img4.jpg" />
                  </div>
                </div>
              </div>

              <div className="relative -mr-3 mt-16 z-10">
                <div className="flex -mx-2 justify-end">
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img5.jpg" />
                  </div>
                  <div className="w-36 h-40 px-2">
                    <Image src="/images/dummy/img6.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-4xl">Cultivate Your Talent</h2>

          <p className="mt-7 mb-10">
            TSA is non-profit academy set up to educate Nigerian creatives on
            how to harness their talent and turn their passions into businesses.
          </p>

          <div className="marquee-wrapper -mx-6 sm:-mx-12 mb-14 overflow-hidden">
            <div className="marquee-1 px-6 mb-3 flex">
              <div className="w-48 flex-shrink-0 mr-4">
                <Button
                  textColor={colors.light}
                  borderColor={colors.alt2}
                  backgroundColor={colors.alt2}
                >
                  <span className="secondary-font">Innovation</span>
                </Button>
              </div>

              <div className="w-48 flex-shrink-0 mr-4">
                <Button
                  borderColor="#95587D"
                  textColor={colors.light}
                  backgroundColor="#95587D"
                >
                  <span className="secondary-font">Creativity</span>
                </Button>
              </div>

              <div className="w-48 flex-shrink-0 mr-4">
                <Button
                  borderColor="#B17565"
                  textColor={colors.light}
                  backgroundColor="#B17565"
                >
                  <span className="secondary-font">Leadership</span>
                </Button>
              </div>
            </div>

            <div className="marquee-2 direction-rtl px-6 flex">
              <div className="w-48 flex-shrink-0 ml-4">
                <Button
                  borderColor="#315C5C"
                  textColor={colors.light}
                  backgroundColor="#315C5C"
                >
                  <span className="secondary-font">Legacy</span>
                </Button>
              </div>

              <div className="w-48 flex-shrink-0 ml-4">
                <Button
                  textColor={colors.light}
                  borderColor={colors.error}
                  backgroundColor={colors.error}
                >
                  <span className="secondary-font">Advocacy</span>
                </Button>
              </div>

              <div className="w-48 flex-shrink-0 ml-4">
                <Button
                  textColor={colors.light}
                  borderColor={colors.alt2}
                  backgroundColor={colors.alt2}
                >
                  <span className="secondary-font">Innovation</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-52 mx-auto">
            <Button textColor={colors.light} backgroundColor={colors.primary}>
              <span className="secondary-font">Learn More</span>
            </Button>
          </div>

          <div className="mt-16">
            <div className="w-4/5 sm:w-64 mx-auto h-72 px-2">
              <Image src="/images/dummy/img7.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">
            Master Your Craft
          </h2>

          <p className="mt-7 mb-10 text-center">
            Each session is delivered into well curated modules that ensure a
            proper knowledge transfer
          </p>

          <Slider>
            <div className="mr-9">
              <div className="w-72">
                <ModuleCard
                  title="Music Production"
                  backgroundColor={colors.error}
                  imageSrc="/images/music-production.png"
                  content="Everything you need to know to make a hit record, wrapped in one session, delivered to you by a certified hit record maker.  Know what works, learn the secrets."
                />
              </div>
            </div>

            <div className="mr-9">
              <div className="w-72">
                <ModuleCard
                  title="Legal & Business"
                  backgroundColor="#315C5C"
                  imageSrc="/images/legal-business.png"
                  content="As a creative, you are a living and breathing business enterprise. We teach you how to manage the business & legal sides of the art world."
                />
              </div>
            </div>

            <div className="mr-9">
              <div className="w-72">
                <ModuleCard
                  title="Talent Management"
                  backgroundColor={colors.alt2}
                  imageSrc="/images/talent-management.png"
                  content="Receive the guidance you need to make it in the entertainment industry. With our well curated courses, you go from an ore to well polished bar of gold."
                />
              </div>
            </div>

            <div className="mr-9">
              <div className="w-72">
                <ModuleCard
                  title="Publicity and Reputation Management"
                  backgroundColor="#95587D"
                  imageSrc="/images/publicity-reputation.png"
                  content="Building a good name & brand is instrumental to your success as they both improve your overall likeability & income opportunities"
                />
              </div>
            </div>

            <div className="mr-9">
              <div className="w-72">
                <ModuleCard
                  title="Distribution"
                  backgroundColor="#315C5C"
                  imageSrc="/images/distribution.png"
                  content="Building a good name & brand is instrumental to your success as they both improve your overall likeability & income opportunities"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 pt-8 pb-2">
          <h2 className="secondary-font text-center text-4xl">
            Over 500 <br />
            creatives trust
            <br />
            The Sarz Academy
          </h2>

          <div className="hero-wrapper hero-wrapper-1 mt-28 -mx-6 px-6">
            <div className="relative z-10 transform -translate-y-16">
              <Slider settings={testimonialSlideSettings}>
                <div className="px-2">
                  <TestimonialCard
                    name="Melinda Ballow"
                    imageSrc="/images/dummy/img5.jpg"
                    designation="Producer of Harlow Ballow"
                    content="The Sarz Academy was a product we had literally been looking for for years. So for us, we wanted to be early adopters."
                  />
                </div>

                <div className="px-2">
                  <TestimonialCard
                    name="Melinda Ballow"
                    imageSrc="/images/dummy/img6.jpg"
                    designation="Producer of Harlow Ballow"
                    content="The Sarz Academy was a product we had literally been looking for for years. So for us, we wanted to be early adopters."
                  />
                </div>

                <div className="px-2">
                  <TestimonialCard
                    name="Melinda Ballow"
                    imageSrc="/images/dummy/img1.jpg"
                    designation="Producer of Harlow Ballow"
                    content="The Sarz Academy was a product we had literally been looking for for years. So for us, we wanted to be early adopters."
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">
            Creating music for Film
          </h2>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">Get Involved</h2>

          <p className="mt-7 mb-10 text-center">
            There are many ways to support TSA’s work, one of which is to make a
            donation.
          </p>

          <DonationCard handleSubmit={handleDonation} />
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8">
          <h2 className="secondary-font text-center text-4xl">Newsletter</h2>

          <p className="mt-7 mb-5 text-center">
            The weekly digest of the best of The Sarz Academy, created by the
            best.
          </p>

          <div className="hero-wrapper hero-wrapper-1 -mx-6 px-6 pt-14 pb-20">
            <div className="relative z-10">
              <NewsletterForm handleSubmit={handleNewsletterSubmission} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
