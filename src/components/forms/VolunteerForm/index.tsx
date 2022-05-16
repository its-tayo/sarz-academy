import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, string } from 'yup'

import { Wrapper } from './styles'
import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextField from '../../input/TextField'
import TextArea from '../../input/TextArea'
import SelectField from '../../input/SelectField'
import { VolunteerFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = {
  name: '',
  email: '',
  message: '',
  department: '',
}
const validationSchema = object().shape({
  name: string().required(),
  message: string(),
  department: string().required(),
  email: string().email().required(),
})

const VolunteerForm: FC<FormProps<VolunteerFormData>> = ({ handleSubmit }) => {
  const onSubmit = async (
    values: VolunteerFormData,
    actions: FormikHelpers<VolunteerFormData>
  ) => {
    await handleSubmit(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Wrapper className="px-6 md:px-10 py-10 md:py-12 md:max-w-lg mx-auto rounded-xl">
          <Form>
            <div className="color-primary text-center mb-10">
              <h3 className="secondary-font text-4xl mb-4">Volunteer</h3>
              <p className="text-sm">
                Please fill out the form and we’ll respond to you as soon as
                possible.
              </p>
            </div>

            <div className="md:flex md:flex-wrap md:-xm-2.5 md:mb-6">
              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField label="Name" name="name" />
              </div>

              <div className="mb-5 md:mb-0 md:w-1/2 md:px-2.5">
                <TextField label="Email" name="email" />
              </div>
            </div>

            <div className="mb-5 md:mb-6 md:px-2.5">
              <SelectField label="Department" name="department">
                <option value="Marketing 1">Marketing 1</option>
                <option value="Marketing 2">Marketing 2</option>
                <option value="Marketing 3">Marketing 3</option>
                <option value="Marketing 4">Marketing 4</option>
              </SelectField>
            </div>

            <div className="mb-8 md:px-2.5">
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

export default VolunteerForm
