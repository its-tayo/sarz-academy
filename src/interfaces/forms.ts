export type FormProps<T> = {
  handleSubmit: (payload: T) => Promise<void>
}

export type DonationFormData = {
  amount: string
}

export type NewsletterFormData = {
  email: string
}

export type ContactFormData = {
  name: string
  email: string
  message: string
}
