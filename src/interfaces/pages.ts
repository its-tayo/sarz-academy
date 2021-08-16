import { CalendarProps } from './content'

export type HomeProps = {
  section_1_title: string
  section_1_description: string
  section_1_image: string
  section_1_btn_label: string
  section_1_btn_link: string
  section_2_title: string
  section_2_description: string
  section_2_image: string
  section_2_btn_label: string
  section_2_btn_link: string
  section_3_title: string
  section_3_description: string
  section_4_title: string
  section_4_description: string
  section_4_image: string
  section_4_btn_label: string
  section_4_btn_link: string
  testimonials: {
    id: number
    author: string
    description: string
    designation: string
    imageURL: string
  }[]
  section_3_items: {
    id: number
    title: string
    description: string
    imageURL: string
  }[]
}

export type AboutUsProps = {
  title: string
  description: string
  youtube_id: string
  mission: string
  vision: string
  gallery_images: string
  spotlight_title: string
  spotlight_image: string
  spotlight_description: string
  trustees: { id: number; name: string; summary: string; imageURL: string }[]
}

export type AlumniProps = {
  title: string
  image_url: string
  classes: {
    id: number
    title: string
    project_title: string
    project_link: string
    project_image_url: string
    project_members: string
    imageURL: string
  }[]
}

export type SessionsProps = {
  title: string
  description: string
  image_url: string
  sessions: {
    id: number
    title: string
    description: string
    imageURL: string
    completed: boolean
  }[]
}

export type SessionProps = {
  title: string
  description: string
  imageURL: string
  completed: boolean
  itinerary: CalendarProps[]
  title1: string | null
  title2: string | null
  youtube_id: string | null
  slide_images: { id: number; url: string }[]
  instructors: { id: number; name: string; image_url: string }[]
  sessions: {
    id: number
    title: string
    description: string
    imageURL: string
    completed: boolean
  }[]
}

type SupportSectionType = {
  title: string
  description: string
  image_url: string
}

export type SupportProps = {
  title: string
  description: string
  donate: SupportSectionType
  volunteer: SupportSectionType
  sponsorship: SupportSectionType
  partnership: SupportSectionType
  records: { label: string; value: string }[]
  next_session_title: string
  next_session_date: string
  next_session_bg_image: string
}
