import { Field, Form, Formik } from 'formik'
import React from 'react'

interface registerProps {}

export const register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="userame" placeholder="" />
        </Form>
      )}
    </Formik>
  )
}

export default register
