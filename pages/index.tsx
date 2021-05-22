import React, { FC } from 'react'

import { Layout, Button } from 'src/components'

const Home: FC = () => (
  <Layout>
    <div className="hero-wrapper hero-wrapper-1 pt-32 bg-repeat bg-center">
      <div className="sz-container px-6 relative z-10">
        <div className="pt-10 pb-8">
          <h1 className="secondary-font text-4xl">
            An Incubator For African Creatives
          </h1>
          <p className="mt-7 mb-12">
            Break into the music industry through practical and hands-on
            sessions led by industry experts.
          </p>

          <Button>
            <span className="secondary-font">Apply Now</span>
          </Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
