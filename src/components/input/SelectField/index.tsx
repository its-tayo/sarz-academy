import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

import { Wrapper } from './styles'
import { FieldProps } from 'src/interfaces/input'

const SelectField: FC<FieldProps> = ({ label = '', name = '', ...props }) => (
  <Wrapper className="relative">
    {!!label && (
      <label className="block mb-2.5" htmlFor={name}>
        {label}
      </label>
    )}

    <Field id={name} className="field" as="select" name={name} {...props} />

    <svg
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current h-5 w-5 absolute top-0 right-0 mr-3 mt-11 pt-1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>

    <ErrorMessage name={name}>
      {(errMsg) => <small className="error">{errMsg}</small>}
    </ErrorMessage>
  </Wrapper>
)

export default SelectField
