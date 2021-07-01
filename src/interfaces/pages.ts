export type Node<T> = { type: string; value?: T }

export type HomeProps = {
  hero_title: Node<string>
  hero_description: Node<string>
  hero_btn_label: Node<string>
  hero_btn_link: Node<string>
  hero_images: Node<{ image: Node<{ image: { name: string; url: string } }> }[]>
  section_2_title: Node<string>
  section_2_description: Node<string>
  section_2_image: Node<{ main: { alt: string | null; url: string } }>
  section_2_btn_label: Node<string>
  section_2_btn_link: Node<string>
  section_2_labels_1: Node<{ label: Node<string>; color_code: Node<string> }[]>
  section_2_labels_2: Node<{ label: Node<string>; color_code: Node<string> }[]>
  section_3_title: Node<string>
  section_3_description: Node<string>
  section_4_title: Node<string>
  section_5_title: Node<string>
  section_5_description: Node<string>
  section_5_btn_label: Node<string>
  section_5_btn_link: Node<string>
  section_5_image: Node<{ main: { alt: string | null; url: string } }>
  section_6_title: Node<string>
  section_6_description: Node<string>
  section_7_title: Node<string>
  section_7_description: Node<string>
  section_7_btn_label: Node<string>
  carousel_cards: Node<
    {
      title: Node<string>
      description: Node<string>
      background_color: Node<string>
      icon: Node<{ image: { name: string; url: string } }>
    }[]
  >
  testimonials: Node<
    {
      image: Node<{ image: { name: string; url: string } }>
      content: Node<string>
      author: Node<string>
      designation: Node<string>
    }[]
  >
}

export type AboutUsProps = {
  title: Node<string>
  youtube_video_id: Node<string>
  description: Node<string>
  mission: Node<string>
  vision: Node<string>
  carousel: Node<{ image: Node<{ image: { name: string; url: string } }> }[]>
  section_1_title: Node<string>
  section_1_description: Node<string>
  section_2_title: Node<string>
  section_2_description: Node<string>
  section_2_btn_label: Node<string>
  trustees: Node<
    {
      name: Node<string>
      background_color: Node<string>
      description1: Node<{ text: string }[]>
      image: Node<{ main: { alt: string; url: string } }>
    }[]
  >
}
