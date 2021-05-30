import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, string } from 'yup'

import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextField from '../../input/TextField'
import { NewsletterFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = { email: '' }
const validationSchema = object().shape({
  email: string().email().required(),
})

const NewsletterForm: FC<FormProps<NewsletterFormData>> = ({
  handleSubmit,
}) => {
  const onSubmit = async (
    values: NewsletterFormData,
    actions: FormikHelpers<NewsletterFormData>
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
        <Form>
          <div className="mb-4">
            <TextField name="email" placeholder="Your email" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            borderColor="#315C5C"
            textColor={colors.light}
            backgroundColor="#315C5C"
          >
            <span className="secondary-font">Subscribe</span>
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm
