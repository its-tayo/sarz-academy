import React, { FC } from 'react'
import axios from 'axios'

import { Layout } from 'src/components'
import { AlumniProps } from 'src/interfaces/pages'
import { LayoutProps } from 'src/interfaces/navigation'

type Props = {
  config: LayoutProps
  content: AlumniProps
}

const Alumni: FC<Props> = ({ config, content }) => {
  const { title = '', image_url = '', classes = [] } = content as AlumniProps

  return (
    <Layout config={config}>
      <section className="primary-bg pt-32">
        <div className="sz-container px-6 relative z-10">
          <div className="pt-10 pb-8">
            <div className="md:flex md:flex-wrap md:items-center md:-mx-2.5">
              <div className="md:w-1/2 md:px-2.5">
                {!!title && (
                  <h1 className="secondary-font text-4xl lg:text-6xl sm:w-60 lg:w-80 sm:mx-auto md:ml-0 text-center md:text-left">
                    {title}
                  </h1>
                )}
              </div>

              <div className="mt-10 md:mt-0 md:w-1/2 md:px-2.5">
                {!!image_url && (
                  <img
                    alt="dummy"
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
          {classes.map(
            ({
              id,
              title,
              imageURL,
              project_link,
              project_title,
              project_members,
              project_image_url,
            }) => {
              const member = project_members.split(',')
              return (
                <div key={id} className="mb-16">
                  <h4 className="secondary-font text-3xl text-center xl:text-left mb-10 xl:mb-16">
                    {title}
                  </h4>

                  <div className="md:flex md:flex-wrap md:-mx-5">
                    <div className="mb-12 xl:mb-0 md:px-5 md:w-full xl:w-1/4 xl:order-1">
                      <img
                        src={imageURL}
                        alt={project_title}
                        className="w-full h-auto object-cover md:max-w-sm md:mx-auto rounded-md"
                      />
                    </div>

                    <div className="mb-12 md:mb-0 md:px-5 md:w-1/3 xl:order-3">
                      <div className="mb-5">
                        <img
                          alt={project_title}
                          src={project_image_url}
                          className="w-full h-auto object-cover rounded-md"
                        />
                      </div>

                      <h3 className="secondary-font text-3xl">
                        {project_title}
                      </h3>
                      <a
                        target="_blank"
                        href={project_link}
                        rel="noreferrer noopener"
                      >
                        View class project
                      </a>
                    </div>

                    <div className="md:px-5 md:w-2/3 xl:w-1/3 xl:flex-1 xl:order-2">
                      {member.map((str, i) => {
                        const [name, designation] = str.trim().split('**')
                        return (
                          <div
                            key={i}
                            className="flex flex-wrap item-center --mx-2 py-2 border-b border-solid border-brown"
                          >
                            <div className="secondary-font px-2 w-1/2">
                              {name.trim()}
                            </div>
                            <div className="px-2 w-1/2">
                              {designation.trim()}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/alumni`
    )
    const { menu = [], facebook = '', instagram = '', twitter = '' } = data
    const { title = '', image_url = '', classes = [] } = data

    return {
      props: {
        config: { menu, facebook, instagram, twitter },
        content: {
          title,
          image_url,
          classes,
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
          image_url: '',
          classes: [],
        },
      },
    }
  }
}

export default Alumni
