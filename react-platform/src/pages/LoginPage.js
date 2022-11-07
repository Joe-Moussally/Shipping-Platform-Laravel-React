import React, { useState } from 'react'

//packages
import { useFormik } from 'formik';

//components
import InputField from '../components/InputField';
import Button from '../components/Button';

//validation schemas
import { logInSchema } from '../schemas';
import Or from '../components/Or';

//api functions
import { callLogInApi } from '../api/fetchFunctions';


function LoginPage() {

  const [errorMessage,setErrorMessage] = useState('')

  //function that is called on submit
  const onSubmit = (values) => {
    callLogInApi(values).then((response) => {
      //save token locally and redirect
      localStorage.setItem('token', response.data.access_token)
      window.location.pathname = '/dashboard'
    }).catch((error) => {
      
      //if error code 401 -> wrong email/password
      if(error.response.status === 401) {
        setErrorMessage('Wrong email/password')
        //remove message after a few seconds
        setTimeout(() => {
          setErrorMessage('')
        },4000)
      }
    })
  }

  //formik hook
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues:{
        email: "",
        password: "",
    },
    validationSchema: logInSchema,
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

          {/* error message container */}
          <div className='flex justify-center m-4'>
            <span className='text-red-500 text-sm text-center'>{errorMessage}</span>
          </div>
          
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