export type FormProps<T> = {
  handleSubmit: (payload: T) => Promise<void>
}

export type DonationFormData = {
  amount: string
}

export type NewsletterFormData = {
  email: string
}

export type NewsletterFormProps = {
  btnLabel?: string
}

export type ContactFormData = {
  name: string
  email: string
  message: string
}

export type ContactFormProps = {
  btnLabel?: string
}

export type RegistrationFormData = {
  url: string
  email: string
  lastName: string
  firstName: string
  phoneNumber: string
}

export type SponsorFormData = {
  name: string
  email: string
  company: string
}

export type SponsorFormProps = {
  title: string
  description: string
}

export type VolunteerFormData = {
  name: string
  email: string
  message: string
  department: string
}
