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
        <Wrapper className="px-6 md:px-10 py-10 md:py-12 md:max-w-lg md:mx-auto md:rounded-xl">
          <Form>
            <div className="md:flex md:flex-wrap md:-xm-2.5 md:mb-6">
              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField label="Name" name="name" />
              </div>

              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField label="Email" name="email" />
              </div>
            </div>

            <div className="mb-8">
              <TextArea label="Message" name="message" />
            </div>

            <div className="md:w-60 md:mx-auto">
              <Button
                type="submit"
                borderColor="#315C5C"
                disabled={isSubmitting}
                textColor={colors.light}
                backgroundColor="#315C5C"
              >
                <span className="secondary-font">Submit</span>
              </Button>
            </div>
          </Form>
        </Wrapper>
      )}
    </Formik>
  )
}

export default ContactForm
