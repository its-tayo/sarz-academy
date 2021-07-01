import { ImageProps } from './content'

export type ModuleCardProps = {
  title: string
  content: string
  imageSrc?: string
  bgImageSrc?: string
  onClick?: () => void
  backgroundColor?: string
}

export type TestimonialCardProps = {
  name: string
  content: string
  imageSrc: string
  designation: string
}

export type SessionCardProps = ImageProps
