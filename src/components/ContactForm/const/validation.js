import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Min 2').max(50, 'Max 50').required('Required'),
  number: yup.string().min(2, 'Min 2').max(50, 'Max 50').required('Required'),
})