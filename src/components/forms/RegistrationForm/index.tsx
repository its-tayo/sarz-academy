import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, string, mixed } from 'yup'

import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextField from '../../input/TextField'
import FileUpload from '../../input/FileUpload'
import { RegistrationFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = {
  email: '',
  file: null,
  lastName: '',
  firstName: '',
  phoneNumber: '',
}
const validationSchema = object().shape({
  file: mixed().required(),
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
        <Form>
          <div className="mb-4">
            <TextField name="firstName" placeholder="First Name" />
          </div>

          <div className="mb-4">
            <TextField name="lastName" placeholder="Last Name" />
          </div>

          <div className="mb-4">
            <TextField name="email" placeholder="Email" />
          </div>

          <div className="mb-4">
            <TextField name="phoneNumber" placeholder="Phone Number" />
          </div>

          <div className="mb-16">
            <FileUpload name="file" label="Upload your work" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            textColor={colors.light}
            borderColor={colors.alt2}
            backgroundColor={colors.alt2}
          >
            <span className="secondary-font">Register</span>
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
