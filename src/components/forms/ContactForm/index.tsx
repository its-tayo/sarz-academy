import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, string } from 'yup'

import { Wrapper } from './styles'
import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextArea from '../../input/TextArea'
import TextField from '../../input/TextField'
import { ContactFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = { name: '', email: '', message: '' }
const validationSchema = object().shape({
  name: string().required(),
  message: string().required(),
  email: string().email().required(),
})

const ContactForm: FC<FormProps<ContactFormData>> = ({ handleSubmit }) => {
  const onSubmit = async (
    values: ContactFormData,
    actions: FormikHelpers<ContactFormData>
  ) => {
    await handleSubmit(values)
    actions.setSubmitting(false)
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Wrapper className="px-6 py-10">
          <Form>
            <div className="mb-4">
              <TextField name="name" placeholder="Name" />
            </div>

            <div className="mb-4">
              <TextField name="email" placeholder="Email" />
            </div>

            <div className="mb-6">
              <TextArea name="message" placeholder="Message" />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              textColor={colors.light}
              backgroundColor="#315C5C"
            >
              <span className="secondary-font">Submit</span>
            </Button>
          </Form>
        </Wrapper>
      )}
    </Formik>
  )
}

export default ContactForm
