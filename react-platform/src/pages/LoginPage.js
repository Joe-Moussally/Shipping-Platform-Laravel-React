import React from 'react'

//packages
import { useFormik } from 'formik';

//components
import InputField from '../components/InputField'
import Button from '../components/Button';

//validation schemas
import { signUpSchema } from '../schemas';
import Or from '../components/Or';

//function that is called on submit
const onSubmit = (values) => {
  console.log(values)
}

function LoginPage() {

    //formik hook
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues:{
          email: "",
          password: "",
      },
      validationSchema: signUpSchema,
      onSubmit
    })

  return (
    <div className='bg-[#001024] h-[100vh] flex flex-col items-center'>

      {/* Page title */}
      <span className='text-white text-6xl font-bold m-10'>Log In</span>

      <form id='signup-form' onSubmit={handleSubmit} autoComplete='off'>

          {/* Email input */}
          <InputField
              id='email'
              label='Email'
              type='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='example@mail.com'
              error={
                  touched.email && errors.email ?
                  errors.email:''
              }
          />

          {/* Password input */}
          <InputField
              id='password'
              label='Password'
              type='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                  touched.password && errors.password ?
                  errors.password:''
              }
          />

          {/* Submit button */}
          <Button
              onClick={handleSubmit}
              text="Log In"
              style={{margin: 'auto'}}
          />
      </form>

      {/* "or signup" section */}
      <Or />

      <Button
        text='Sign Up'
        outlined={true}
        onClick={() => window.location.pathname = '/register'}
      />

    </div>
  )
}

export default LoginPage