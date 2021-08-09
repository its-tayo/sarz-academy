import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import axios from 'axios'

import { theme } from 'src/styles/theme'
import { SessionProps } from 'src/interfaces/pages'
import { LayoutProps } from 'src/interfaces/navigation'
import { RegistrationFormData } from 'src/interfaces/forms'
import {
  Image,
  Slider,
  Layout,
  Button,
  Calendar,
  ModuleCard,
  RegistrationForm,
} from 'src/components'

type Props = {
  config: LayoutProps
  content: SessionProps
}

const { colors } = theme

const handleEventRegistration = async (payload: RegistrationFormData) => {
  console.log('newsletter form submitted: ', payload)
}

const InitialContent: FC<Pick<SessionProps, 'title' | 'itinerary'>> = ({
  title,
  itinerary,
}) => {
  return (
    <>
      <section className="hero-wrapper hero-wrapper-3 pt-32 bg-repeat bg-center">
        <div className="primary-bg hidden md:block absolute w-full z-20 left-0 top-0 h-32" />

        <div className="sz-container px-6 relative z-10">
          <div className="xl:flex xl:flex-wrap">
            <div className="pt-10 pb-8 xl:w-1/2">
              {!!title && (
                <h1 className="secondary-font text-4xl lg:max-w-sm">{title}</h1>
              )}

              {!!itinerary.length && (
                <div className="mt-8 md:mt-12 xl:mr-10">
                  <Calendar itinerary={itinerary} />
                </div>
              )}
            </div>

            <div className="light-bg hidden xl:flex xl:flex-col xl:w-1/2 xl:justify-center">
              <div className="px-6 md:pl-14 md:pr-0 py-8 md:py-16">
                <h2 className="secondary-font text-4xl color-primary">
                  Register to Attend
                </h2>

                <p className="mt-7 mb-10 color-primary md:max-w-sm">
                  Please tell a bit about you so that we can personalise your
                  onboarding experience.
                </p>

                <RegistrationForm handleSubmit={handleEventRegistration} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light-bg xl:hidden">
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
    </>
  )
}

const CompletedContent: FC<
  Pick<
    SessionProps,
    | 'title'
    | 'imageURL'
    | 'title1'
    | 'title2'
    | 'youtube_id'
    | 'slide_images'
    | 'instructors'
  >
> = ({
  title,
  imageURL,
  title1,
  title2,
  youtube_id,
  slide_images,
  instructors,
}) => {
  return (
    <>
      <section
        className="hero-wrapper pt-32 bg-repeat bg-center"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 md:pt-60 pb-60 md:pb-20">
            {!!title && (
              <h1 className="secondary-font text-4xl text-center md:text-left md:max-w-sm">
                {title}
              </h1>
            )}
          </div>
        </div>
      </section>

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          {!!instructors.length && (
            <>
              <h2 className="secondary-font text-center md:text-left text-4xl">
                Instructors
              </h2>

              <div className="mt-12 mb-20 text-center md:text-left md:flex md:flex-wrap md:-mx-4">
                {instructors.map(({ id, name, image_url }) => (
                  <div key={id} className="mb-10 md:mb-0 md:px-4">
                    <div className="w-36 h-40 mx-auto mb-4">
                      <Image src={image_url} />
                    </div>
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {!!title1 && <div dangerouslySetInnerHTML={{ __html: title1 }} />}

          {!!slide_images.length && (
            <div className="my-11 -mx-6">
              <Slider>
                {slide_images.map(({ id, url }) => (
                  <div key={id} className="ml-6">
                    <div className="w-40 h-52">
                      <Image src={url} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}

          {!!title2 && <div dangerouslySetInnerHTML={{ __html: title2 }} />}

          {!!youtube_id && (
            <div className="my-11 h-44 sm:h-64 md:h-80 lg:h-96 border border-gray-500 rounded-md md:max-w-xl lg:max-w-2xl md:mx-auto">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
                title="About the Sarz academy"
                src={`https://www.youtube.com/embed/${youtube_id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

const Session: FC<Props> = ({ config, content }) => {
  const router = useRouter()
  const [showAll, setShowAll] = useState(true)

  const {
    title = '',
    // description = '',
    imageURL = '',
    completed = false,
    itinerary = [],
    title1 = '',
    title2 = '',
    youtube_id = '',
    slide_images = [],
    instructors = [],
    sessions = [],
  } = content

  const navHelper = (path?: string) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <Layout config={config}>
      {completed ? (
        <CompletedContent
          title={title}
          title1={title1}
          title2={title2}
          imageURL={imageURL}
          youtube_id={youtube_id}
          instructors={instructors}
          slide_images={slide_images}
        />
      ) : (
        <InitialContent title={title} itinerary={itinerary} />
      )}

      <section className="primary-bg">
        <div className="sz-container px-6 py-8 md:py-16">
          <div className="mb-6">
            <ul className="flex items-center justify-end -mx-2">
              <li className="px-2">
                <Button
                  size="small"
                  textColor={colors.light}
                  onClick={() => setShowAll(false)}
                  borderColor={!showAll ? '#315C5C' : 'transparent'}
                  backgroundColor={!showAll ? '#315C5C' : 'transparent'}
                >
                  Ongoing
                </Button>
              </li>

              <li className="px-2">
                <Button
                  size="small"
                  textColor={colors.light}
                  onClick={() => setShowAll(true)}
                  borderColor={showAll ? '#315C5C' : 'transparent'}
                  backgroundColor={showAll ? '#315C5C' : 'transparent'}
                >
                  <span>All</span>
                </Button>
              </li>
            </ul>
          </div>

          <div className="md:flex md:flex-wrap md:-mx-1.5 lg:-mx-2.5">
            {sessions
              .filter(({ completed: session_completed }) => {
                if (showAll) {
                  return true
                }

                return !session_completed
              })
              .map(
                ({
                  id,
                  title: s_title,
                  description: s_description,
                  imageURL: s_imageURL,
                  completed: session_completed,
                }) => (
                  <div key={id} className="mb-8 md:w-1/3 md:px-1.5 lg:px-2.5">
                    <ModuleCard
                      title={s_title}
                      bgImageSrc={s_imageURL}
                      content={s_description}
                      onClick={() => navHelper(`/sessions/${id}`)}
                      btnLabel={session_completed ? 'View' : 'Register'}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Session

export async function getServerSideProps({
  query,
}: NextPageContext): Promise<any> {
  try {
    const { id = 0 } = query
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sessions/${id}`
    )
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const {
      title = '',
      description = '',
      imageURL = '',
      completed = false,
      itinerary = [],
      title1 = '',
      title2 = '',
      youtube_id = '',
      slide_images = [],
      instructors = [],
      sessions = [],
    } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: {
          title,
          description,
          imageURL,
          completed,
          itinerary,
          title1,
          title2,
          youtube_id,
          slide_images,
          instructors,
          sessions,
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
          imageURL: '',
          completed: false,
          itinerary: [],
          title1: '',
          title2: '',
          youtube_id: '',
          slide_images: [],
          instructors: [],
          sessions: [],
        },
      },
    }
  }
}
