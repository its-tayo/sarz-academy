import React, { FC } from 'react'

import {
  Image,
  Layout,
  Slider,
  Button,
  Calendar,
  ModuleCard,
  RegistrationForm,
} from 'src/components'
import { theme } from 'src/styles/theme'
import { RegistrationFormData } from 'src/interfaces/forms'

const { colors } = theme

const dummyClickHandler = () => {
  console.log('click fired')
}

const handleEventRegistration = async (payload: RegistrationFormData) => {
  console.log('newsletter form submitted: ', payload)
}

const Sessions: FC = () => (
  <Layout>
    <section className="primary-bg pt-32 bg-repeat bg-center">
      <div className="sz-container px-6 relative z-10">
        <div className="pt-10 pb-8">
          <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
            <div className="md:w-1/2 lg:w-2/5 md:px-2.5">
              <h1 className="secondary-font text-4xl sm:w-72 sm:mx-auto md:ml-0 sm:text-center md:text-left">
                An Incubator For African Creatives
              </h1>

              <p className="mt-7 mb-10 md:mb-0 sm:w-72 md:ml-0 sm:mx-auto sm:text-center md:text-left">
                Break into the music industry through practical and hands-on
                sessions led by industry experts.
              </p>
            </div>

            <div className="-mx-6 md:mx-0 mb-4 md:mb-0 md:w-1/2 lg:w-3/5 md:px-2.5">
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

    <div>
      <section className="hero-wrapper hero-wrapper-2 pt-32 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <h1 className="secondary-font text-4xl lg:max-w-sm">
              Creative Approaches to music production
            </h1>

            <div className="mt-8 md:mt-12">
              <Calendar />
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <h2 className="secondary-font text-4xl color-primary">
            Register to Attend
          </h2>

          <p className="mt-7 mb-10 color-primary md:max-w-sm">
            Please tell a bit about you so that we can personalise your
            onboarding experience.
          </p>

          <RegistrationForm handleSubmit={handleEventRegistration} />
        </div>
      </section>
    </div>

    <div>
      <section className="hero-wrapper hero-wrapper-complete pt-32 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 md:pt-60 pb-60 md:pb-20">
            <h1 className="secondary-font text-4xl text-center md:text-left md:max-w-sm">
              Creative Approaches to music production
            </h1>
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <h2 className="secondary-font text-center md:text-left text-4xl">
            Instructors
          </h2>

          <div className="mt-12 mb-20 text-center md:text-left md:flex md:flex-wrap md:-mx-4">
            <div className="mb-10 md:mb-0 md:px-4">
              <div className="w-36 h-40 mx-auto mb-4">
                <Image src="/images/dummy/img1.jpg" />
              </div>
              <p>Tiwa Savage</p>
            </div>

            <div className="mb-10 md:mb-0 md:px-4">
              <div className="w-36 h-40 mx-auto mb-4">
                <Image src="/images/dummy/img6.jpg" />
              </div>
              <p>Ayo Balogun </p>
            </div>

            <div className="md:px-4">
              <div className="w-36 h-40 mx-auto mb-4">
                <Image src="/images/dummy/img7.jpg" />
              </div>
              <p>Sarz Osabuohien</p>
            </div>
          </div>

          <p>
            Reminisce aka Oja Daddy is a versatile musician, singer, rapper,
            songwriter, and actor, with a penchant for murdering beats. Having
            produced multiple hits such as Tesojue, Ponmile, and Problem, to
            name a few, he’s the perfect facilitator for the session on
            “Creative Approaches to Music Production” <br /> <br />
            The biggest hits start with a tune in your head. You need to
            discover and nurture that sound. Creativity goes beyond the surface
            level and requires that an artist pushes themself to their
            boundaries. Through this session, the artists were taught to unlock
            their abilities, and some were surprised by what they found.
          </p>

          <div className="my-11 -mx-6">
            <Slider>
              <div className="ml-6">
                <img
                  src="/images/dummy/img1.jpg"
                  alt="dummy"
                  className="w-auto h-52 object-cover"
                />
              </div>

              <div className="ml-6">
                <img
                  src="/images/dummy/img2.jpg"
                  alt="dummy"
                  className="w-auto h-52 object-cover"
                />
              </div>

              <div className="ml-6">
                <img
                  src="/images/dummy/img3.jpg"
                  alt="dummy"
                  className="w-auto h-52 object-cover"
                />
              </div>

              <div className="ml-6">
                <img
                  src="/images/dummy/img4.jpg"
                  alt="dummy"
                  className="w-auto h-52 object-cover"
                />
              </div>
            </Slider>
          </div>

          <p>
            The session started with a brief overview of the art of music
            production, then went deep into the nooks and crannies of musical
            sound engineering. It covered topics such as recording, editing,
            mixing, and mastering. In the class, the students were made to deal
            hands-on with equipment and practice what they were taught. They
            were then divided into groups of two, to use the skills they had
            learnt, to produce beautiful melodies.
          </p>

          <div className="my-11 h-44 sm:h-64 md:h-80 lg:h-96 border border-gray-500 rounded-md md:max-w-xl lg:max-w-2xl md:mx-auto">
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

          <p>
            The Kako bii Chiken crooner then rounded up the class with the group
            project presentation, thus ending the sessions with a bang. All the
            students were truly imparted
          </p>
        </div>
      </section>
    </div>

    <section className="primary-bg">
      <div className="sz-container px-6 py-8 md:py-16">
        <div className="mb-6">
          <ul className="flex items-center justify-end -mx-2">
            <li className="px-2">
              <Button
                size="small"
                borderColor="#315C5C"
                textColor={colors.light}
                backgroundColor="#315C5C"
                onClick={dummyClickHandler}
              >
                Ongoing
              </Button>
            </li>

            <li className="px-2">
              <Button
                size="small"
                textColor={colors.light}
                borderColor="transparent"
                onClick={dummyClickHandler}
                backgroundColor="transparent"
              >
                <span>All</span>
              </Button>
            </li>
          </ul>
        </div>

        <div className="md:flex md:flex-wrap md:-mx-1.5 lg:-mx-2.5">
          <div className="mb-8 md:w-1/3 md:px-1.5 lg:px-2.5">
            <ModuleCard
              onClick={dummyClickHandler}
              bgImageSrc="/images/event-5.jpg"
              title="Producing music and Beatmaking"
              content="Get introduced to a unique process for making a beat from scratch, with nothing but a little inspiration."
            />
          </div>

          <div className="mb-8 md:w-1/3 md:px-1.5 lg:px-2.5">
            <ModuleCard
              onClick={dummyClickHandler}
              bgImageSrc="/images/event-2.jpg"
              title="Branding and Thought Leadership"
              content="As a creative, you are a living and breathing business enterprise. We teach you how to manage the business & legal sides of the art world."
            />
          </div>

          <div className="mb-8 md:w-1/3 md:px-1.5 lg:px-2.5">
            <ModuleCard
              onClick={dummyClickHandler}
              bgImageSrc="/images/event-4.jpg"
              title="The Subtle Art of Music Filmmaking"
              content="Receive the guidance you need to make it in the entertainment industry. With our well curated courses, you go from an ore to well polished bar of gold."
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Sessions
