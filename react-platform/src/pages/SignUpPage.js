import React from 'react'
import InputField from '../components/InputField'

function SignUpPage() {
  return (
    <div className='bg-[#001024] h-[100vh] flex flex-col items-center'>
        <span className='text-white text-6xl font-bold m-10'>Sign Up</span>

        <form autoComplete='off'>
            <InputField
                label='Email'
                type='email'
                placeholder='example@mail.com'
            />
        </form>
    </div>
  )
}

export default SignUpPage