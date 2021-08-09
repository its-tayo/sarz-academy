import { Settings } from 'react-slick'

export type ImageProps = {
  src: string
}

export type SliderProps = {
  settings?: Settings
}

export type PillProps = {
  label: string
  active?: boolean
  onClick?: () => void
}

export type CalendarProps = {
  label: string
  title: string
  description: string
  instructors: {
    id: number
    name: string
  }[]
}
