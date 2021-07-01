const Prismic = require('@prismicio/client')

export const prismicClient = Prismic.client(
  process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT || ''
)
