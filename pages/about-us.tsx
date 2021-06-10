import React, { FC } from 'react'

import { ContactFormData } from 'src/interfaces/forms'
import { Layout, Slider, Image, ContactForm } from 'src/components'

const handleContactForm = async ({ name, email, message }: ContactFormData) => {
  console.log('contact form submitted: ', { name, email, message })
}

const AboutUs: FC = () => (
  <Layout>
    <section className="hero-wrapper hero-wrapper-1 pt-32 md:pb-10 bg-repeat bg-center">
      <div className="sz-container px-6 relative z-10">
        <div className="pt-10 pb-8">
          <h1 className="secondary-font text-4xl text-center sm:w-72 sm:mx-auto">
            About The Sarz Academy
          </h1>

          <div className="mt-8 md:mt-16 mb-14 w-full h-44 sm:h-64 md:h-80 lg:h-96 border border-gray-500 rounded-md md:max-w-xl lg:max-w-2xl md:mx-auto">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-md"
              title="About the Sarz academy"
              src="https://www.youtube.com/embed/TCH_LF9t99Y"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <p className="text-center md:hidden">
            The Sarz Academy (TSA) is a non-governmental and non-profit
            organization, set up by Osabuohien Osaretin (aka Sarz). We train
            creatives, help them improve their skills, and give them the
            business expertise required to succeed.
          </p>
        </div>
      </div>
    </section>

    <section className="primary-bg md:hidden">
      <div className="sz-container px-6 py-8">
        <h2 className="secondary-font text-center text-4xl">Mission</h2>

        <p className="mt-7 text-center">
          TSA is non-profit academy set up to educate Nigerian creatives on how
          to harness their talent and turn their passions into businesses.
        </p>
      </div>
    </section>

    <section className="primary-bg md-hero-wrapper">
      <div className="sz-container px-6 py-8 md:pt-16 md:pb-0 md:relative md:z-10">
        <p className="text-center hidden md:block md:max-w-lg md:mx-auto md:mt-4 md:mb-20">
          The Sarz Academy (TSA) is a non-governmental and non-profit
          organization, set up by Osabuohien Osaretin (aka Sarz). We train
          creatives, help them improve their skills, and give them the business
          expertise required to succeed.
        </p>

        <div className="md:flex md:flex-wrap md:-mx-2.5 md:mb-28">
          <div className="hidden md:block md:w-1/2 md:px-2.5">
            <h2 className="secondary-font text-center text-4xl">Mission</h2>

            <p className="mt-7 text-center md:max-w-sm md:mx-auto">
              TSA is non-profit academy set up to educate Nigerian creatives on
              how to harness their talent and turn their passions into
              businesses.
            </p>
          </div>

          <div className="md:w-1/2 md:px-2.5">
            <h2 className="secondary-font text-center text-4xl">Vision</h2>

            <p className="mt-7 mb-16 md:mb-0 text-center md:max-w-sm md:mx-auto">
              TSA is non-profit academy set up to educate Nigerian creatives on
              how to harness their talent and turn their passions into
              businesses.
            </p>
          </div>
        </div>

        <div className="primary-bg -mx-6 mb-4 md:mb-0 md:pt-4 md:pb-16">
          <Slider>
            <div className="mr-4">
              <img
                src="/images/dummy/img1.jpg"
                alt="dummy"
                className="w-auto h-52 object-cover"
              />
            </div>

            <div className="mr-4">
              <img
                src="/images/dummy/img2.jpg"
                alt="dummy"
                className="w-auto h-52 object-cover"
              />
            </div>

            <div className="mr-4">
              <img
                src="/images/dummy/img3.jpg"
                alt="dummy"
                className="w-auto h-52 object-cover"
              />
            </div>

            <div className="mr-4">
              <img
                src="/images/dummy/img4.jpg"
                alt="dummy"
                className="w-auto h-52 object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>

    <section className="alt1-bg">
      <div className="sz-container px-6 py-8 md:py-24">
        <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
          <div className="md:w-1/2 md:px-2.5 md:order-1">
            <h2 className="secondary-font text-center md:text-left text-4xl md:max-w-sm md:ml-auto">
              Board of Trustees
            </h2>

            <p className="mt-7 mb-10 md:mb-0 text-center md:text-left md:max-w-sm md:ml-auto">
              The Sarz Academy board members, are driven by a vision to grow the
              Nigerian entertainment industry by training young talent to
              fulfill their best potential.
            </p>
          </div>

          <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
            <div className="w-36 h-40 mx-auto">
              <Image src="/images/dummy/img5.jpg" />
            </div>

            <div className="relative -mt-12 flex flex-wrap justify-center">
              <div className="w-36 h-40 flex-shrink-0 mr-2">
                <Image src="/images/dummy/img6.jpg" />
              </div>

              <div className="w-36 h-40 flex-shrink-0">
                <Image src="/images/dummy/img7.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="primary-bg">
      <div className="sz-container px-6 py-8 md:py-24">
        <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
          <div className="md:w-1/2 md:px-2.5 md:order-1">
            <h2 className="secondary-font text-4xl md:max-w-sm md:ml-auto">
              Osahun Osabuohien
            </h2>

            <p className="mt-7 mb-10 md:mb-0 md:max-w-sm md:ml-auto">
              Osabuohien Osaretin better known by his stage name Sarz, is an
              award winning Nigerian record producer and musician. <br /> <br />
              Sarz has worked with a wide range of people across the music
              industry, and played a crucial role in afrobeats’ global
              recognition; Having produced celebrated cross-cultural projects
              such as Drake’s “One Dance,” Wizkid and Skepta on “Energy (Stay
              Far Away)”, etc.
            </p>
          </div>

          <div className="mb-6 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
            <div className="w-36 h-40 mx-auto relative z-10">
              <Image src="/images/dummy/img5.jpg" />
            </div>

            <div className="relative -mt-12 flex flex-wrap justify-center">
              <div className="w-36 h-40 flex-shrink-0 mr-2 opacity-30">
                <Image src="/images/dummy/img6.jpg" />
              </div>

              <div className="w-36 h-40 flex-shrink-0 opacity-30">
                <Image src="/images/dummy/img7.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="brown-bg">
      <div className="sz-container px-6 py-8 md:py-24">
        <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
          <div className="md:w-1/2 md:px-2.5 md:order-1">
            <h2 className="secondary-font text-4xl md:max-w-sm md:ml-auto">
              Opeyemi Iredumare
            </h2>

            <p className="mt-7 mb-10 md:mb-0 md:max-w-sm md:ml-auto">
              Iredumare Opeyemi is a legal practitioner in Nigeria with years of
              experience in intellectual property, Internet/ Telecommunication
              Law and Policy. <br /> <br />
              Ire has experience in facilitating multimillion dollars deals for
              his clients in content licensing, music and film acquisition,
              intellectual property valuation, digital content distribution
              companies, digital music service providers, film makers, film
              producers, music publishers, record labels, aggregators and
              artistes in the creative industries in Africa and Middle East.
            </p>
          </div>

          <div className="mb-4 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
            <div className="w-36 h-40 mx-auto opacity-30">
              <Image src="/images/dummy/img5.jpg" />
            </div>

            <div className="relative -mt-12 flex flex-wrap justify-center">
              <div className="w-36 h-40 flex-shrink-0 mr-2 opacity-30">
                <Image src="/images/dummy/img6.jpg" />
              </div>

              <div className="w-36 h-40 flex-shrink-0">
                <Image src="/images/dummy/img7.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blackberry-bg">
      <div className="sz-container px-6 py-8 md:py-24">
        <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
          <div className="md:w-1/2 md:px-2.5 md:order-1">
            <h2 className="secondary-font text-4xl md:max-w-sm md:ml-auto">
              Osahun Osabuohien
            </h2>

            <p className="mt-7 mb-10 md:mb-0 md:max-w-sm md:ml-auto">
              Osabuohien Osaretin better known by his stage name Sarz, is an
              award winning Nigerian record producer and musician. <br /> <br />
              Sarz has worked with a wide range of people across the music
              industry, and played a crucial role in afrobeats’ global
              recognition; Having produced celebrated cross-cultural projects
              such as Drake’s “One Dance,” Wizkid and Skepta on “Energy (Stay
              Far Away)”, etc.
            </p>
          </div>

          <div className="mb-4 md:mb-0 md:w-1/2 md:px-2.5 md:order-0">
            <div className="w-36 h-40 mx-auto opacity-30">
              <Image src="/images/dummy/img5.jpg" />
            </div>

            <div className="relative -mt-12 flex flex-wrap justify-center">
              <div className="w-36 h-40 flex-shrink-0 mr-2">
                <Image src="/images/dummy/img6.jpg" />
              </div>

              <div className="w-36 h-40 flex-shrink-0 opacity-30">
                <Image src="/images/dummy/img7.jpg" />
              </div>
            </div>
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
          <ContactForm handleSubmit={handleContactForm} />
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutUs
