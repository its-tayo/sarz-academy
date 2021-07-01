import { Node } from './pages'

export type LayoutProps = {
  menu_items: Node<{ title: Node<string>; link: Node<string> }[]>
  footer_text: Node<string>
  facebook_url: Node<{ url: string }>
  instagram_url: Node<{ url: string }>
  twitter_url: Node<{ url: string }>
  copyright: Node<string>
}
