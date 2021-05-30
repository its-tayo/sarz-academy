export type FormProps<T> = {
  handleSubmit: (payload: T) => Promise<void>
}

export type DonationFormData = {
  amount: string
}

export type NewsletterFormData = {
  email: string
}
