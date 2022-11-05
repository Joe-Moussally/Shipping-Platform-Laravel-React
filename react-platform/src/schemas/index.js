import * as yup from 'yup';

// Sign Up Form Schema
export const signUpSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Required"),
    password: yup
        .string()
        .min(6,"Password length must be at least 6")
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Required"),

})

// Log In Form Schema
export const logInSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Required"),
    password: yup
        .string()
        .min(6,"Password length must be at least 6")
        .required("Required"),
})