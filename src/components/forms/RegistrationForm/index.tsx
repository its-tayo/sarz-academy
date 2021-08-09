import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, string } from 'yup'

import { Wrapper } from './styles'
import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextField from '../../input/TextField'
import { RegistrationFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = {
  url: '',
  email: '',
  lastName: '',
  firstName: '',
  phoneNumber: '',
}
const validationSchema = object().shape({
  url: string().url().required(),
  lastName: string().required(),
  firstName: string().required(),
  email: string().email().required(),
  phoneNumber: string()
    .matches(/^[+234]\d{13}$/, {
      message: 'Incorrect format. Must start with +234',
      excludeEmptyString: false,
    })
    .required('Phone number is a required field'),
})

const RegistrationForm: FC<FormProps<RegistrationFormData>> = ({
  handleSubmit,
}) => {
  const onSubmit = async (
    values: RegistrationFormData,
    actions: FormikHelpers<RegistrationFormData>
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
        <Wrapper className="md:max-w-lg">
          <Form>
            <div className="md:flex md:flex-wrap md:-xm-2.5 md:mb-6">
              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField name="firstName" label="First Name" />
              </div>

              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField name="lastName" label="Last Name" />
              </div>
            </div>

            <div className="md:flex md:flex-wrap md:-xm-2.5 md:mb-10">
              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField name="email" label="Email" />
              </div>

              <div className="mb-10 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField name="phoneNumber" label="Phone Number" />
              </div>
            </div>

            <div className="mb-16">
              <TextField name="url" label="Public Portfolio URL" />
            </div>

            <div className="md:w-60">
              <Button
                type="submit"
                disabled={isSubmitting}
                textColor={colors.light}
                borderColor={colors.alt2}
                backgroundColor={colors.alt2}
              >
                <span className="secondary-font">Register</span>
              </Button>
            </div>
          </Form>
        </Wrapper>
      )}
    </Formik>
  )
}

export default RegistrationForm
