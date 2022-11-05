import React from 'react'

//packages
import { useFormik } from 'formik';

//components
import InputField from '../components/InputField'
import Button from '../components/Button';

//validation schemas
import { signUpSchema } from '../schemas';


//function that is called on submit
const onSubmit = () => {
    console.log('SUBMITTED')
}

function SignUpPage() {

    //formik hook
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:{
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: signUpSchema,
        onSubmit
    })

    console.log(errors)

  return (
    <div className='bg-[#001024] h-[100vh] flex flex-col items-center'>

        {/* Page title */}
        <span className='text-white text-6xl font-bold m-10'>Sign Up</span>

        <form id='signup-form' onSubmit={handleSubmit} autoComplete='off'>

            {/* Email input */}
            <InputField
                id='email'
                label='Email'
                type='email'
                value={values.email}
                onChange={handleChange}
                placeholder='example@mail.com'
                error={errors.email}
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
                error={errors.password}
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
                error={errors.confirmPassword}
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