import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  principle:yup.number().required(),
  rate: yup.number().required(),
  startYear: yup.number().required(),
  startMonth: yup.number().required(),
  startDay: yup.number().required(),
  endYear: yup.number().required(),
  endMonth: yup.number().required(),
  endDay: yup.number().required(),
  
})