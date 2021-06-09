import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

import { Wrapper } from './styles'
import { FieldProps } from 'src/interfaces/input'

const TextArea: FC<FieldProps> = ({ label = '', name = '', ...props }) => (
  <Wrapper>
    {!!label && (
      <label className="block mb-2.5" htmlFor={name}>
        {label}
      </label>
    )}

    <Field
      rows="7"
      id={name}
      name={name}
      as="textarea"
      className="field"
      {...props}
    />

    <ErrorMessage name={name}>
      {(errMsg) => <small className="error">{errMsg}</small>}
    </ErrorMessage>
  </Wrapper>
)

export default TextArea
