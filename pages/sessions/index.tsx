import React, { FC, useState } from 'react'
// import { useRouter } from 'next/router'
import axios from 'axios'

import { theme } from 'src/styles/theme'
import { SessionsProps } from 'src/interfaces/pages'
import { LayoutProps } from 'src/interfaces/navigation'
import { Layout, Button, ModuleCard } from 'src/components'

type Props = {
  config: LayoutProps
  content: SessionsProps
}

const { colors } = theme

const TEMP_REGISTRATION_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSfKAmIqV91K9UgzfmvFo-EEcxeqZOU6B_m1HbbscmXqHuO_OA/viewform'

const externalRouting = () => {
  if (window && typeof window !== 'undefined') {
    ;(window as any).location = TEMP_REGISTRATION_LINK
  }
}

const Sessions: FC<Props> = ({ config, content }) => {
  // const router = useRouter()
  const [showAll, setShowAll] = useState(true)

  const {
    title = '',
    description = '',
    image_url = '',
    sessions = [],
  } = content as SessionsProps

  // const navHelper = (path?: string) => {
  //   if (path) {
  //     router.push(path)
  //   }
  // }

  return (
    <Layout config={config}>
      <section className="primary-bg pt-32 bg-repeat bg-center">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
              <div className="md:w-1/2 md:px-2.5">
                {!!title && (
                  <h1 className="secondary-font text-4xl sm:w-72 sm:mx-auto md:ml-0 sm:text-center md:text-left">
                    {title}
                  </h1>
                )}

                {!!description && (
                  <p className="mt-7 mb-10 md:mb-0 sm:w-72 md:ml-0 sm:mx-auto sm:text-center md:text-left">
                    {description}
                  </p>
                )}
              </div>

              <div className="md:mx-0 mb-4 md:mb-0 md:w-1/2 md:px-2.5">
                {!!image_url && (
                  <img
                    alt={title}
                    src={image_url}
                    className="w-full h-auto object-cover rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              .filter(({ completed }) => {
                if (showAll) {
                  return true
                }

                return !completed
              })
              .map(({ id, title, description, imageURL, completed }) => (
                <div key={id} className="mb-8 md:w-1/3 md:px-1.5 lg:px-2.5">
                  <ModuleCard
                    title={title}
                    bgImageSrc={imageURL}
                    content={description}
                    btnLabel={completed ? 'View' : 'Register'}
                    // onClick={() => navHelper(`/sessions/${id}`)}
                    onClick={externalRouting}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sessions`
    )
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const { title = '', description = '', image_url = '', sessions = [] } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: { title, description, image_url, sessions },
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
          image_url: '',
          sessions: [],
        },
      },
    }
  }
}

export default Sessions
