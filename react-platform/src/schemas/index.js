import * as yup from 'yup';

// Sign Up Form Schema
export const signUpSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required"),
    password: yup.string().min(5,"Password length must be at least 5").required("Required"),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Passwords must match"),

})