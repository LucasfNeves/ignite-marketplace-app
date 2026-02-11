import * as yup from 'yup';

export const RegisterSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Passwords must match')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d{11}$/, 'Phone number must be 11 digits'),
});

export type RegisterFormValues = yup.InferType<typeof RegisterSchema>;
