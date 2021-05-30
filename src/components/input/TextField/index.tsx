import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

import { Wrapper } from './styles'
import { TextFieldProps } from 'src/interfaces/input'

const TextField: FC<TextFieldProps> = ({ label = '', name = '', ...props }) => (
  <Wrapper>
    <div>
      {!!label && (
        <label className="block mb-2.5" htmlFor={name}>
          {label}
        </label>
      )}

      <Field id={name} className="field" name={name} {...props} />

      <ErrorMessage name={name}>
        {(errMsg) => <small className="error">{errMsg}</small>}
      </ErrorMessage>
    </div>
  </Wrapper>
)

export default TextField
