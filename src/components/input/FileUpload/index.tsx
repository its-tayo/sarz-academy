import React, { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { Wrapper } from './styles'
import { Field, ErrorMessage } from 'formik'
import { FieldProps } from 'src/interfaces/input'

const FileUpload: FC<FieldProps> = ({
  name = '',
  label = 'Drop file here',
  ...props
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Wrapper>
      <div
        className="drop-zone-wrapper w-full border border-dashed rounded-3xl p-3 flex items-center justify-center h-40"
        {...getRootProps()}
      >
        <div>
          {isDragActive ? (
            <label htmlFor={name}>Drop the file(s) here...</label>
          ) : (
            <label htmlFor={name}>{label}</label>
          )}

          <input {...getInputProps()} />
        </div>
      </div>

      {/* <Field id={name} className="field" name={name} {...props} /> */}

      <ErrorMessage name={name}>
        {(errMsg) => <small className="error">{errMsg}</small>}
      </ErrorMessage>
    </Wrapper>
  )
}

export default FileUpload
