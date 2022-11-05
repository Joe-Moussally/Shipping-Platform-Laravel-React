import React from 'react'

//packages
import { useFormik } from 'formik';

//components
import InputField from '../components/InputField'
import Button from '../components/Button';

function SignUpPage() {

    //formik hook
    const { values, handleBlur, handleChange } = useFormik({
        initialValues:{
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

  return (
    <div className='bg-[#001024] h-[100vh] flex flex-col items-center'>

        {/* Page title */}
        <span className='text-white text-6xl font-bold m-10'>Sign Up</span>

        <form autoComplete='off'>

            {/* Email input */}
            <InputField
                id='email'
                label='Email'
                type='email'
                value={values.email}
                onChange={handleChange}
                placeholder='example@mail.com'
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
            />

            {/* Confirm Password Input */}
            <InputField
                id='confirmPassword'
                label='Confirm Password'
                type='password'
                placeholder='Confirm Password'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {/* Submit button */}
            <Button
                text="Sign Up"
                style={{margin: 'auto'}}
            />
        </form>
    </div>
  )
}

export default SignUpPage