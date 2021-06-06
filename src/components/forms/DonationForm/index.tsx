import React, { FC } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { object, number } from 'yup'

import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import TextField from '../../input/TextField'
import { DonationFormData, FormProps } from 'src/interfaces/forms'

const { colors } = theme
const initialValues = { amount: '' }
const validationSchema = object().shape({
  amount: number().min(100).required(),
})

const DonationForm: FC<FormProps<DonationFormData>> = ({ handleSubmit }) => {
  const onSubmit = async (
    values: DonationFormData,
    actions: FormikHelpers<DonationFormData>
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
            <TextField
              name="amount"
              label="Pledge amount"
              placeholder="3,000,000"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            textColor={colors.light}
            borderColor={colors.error}
            backgroundColor={colors.error}
          >
            <span className="secondary-font">Continue</span>
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default DonationForm
