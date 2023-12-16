import Joi from "joi";
import CustomersPayload from "../interfaces/CustomersPayload";


class CustomerValidator {
  MININUM_NAME_LENGHT: number;
  MAXIMUM_NAME_LENGHT: number

  MINIMUM_CPF_LENGHT: number
  MAXIMUM_CPF_LENGHT: number

  MINIMUM_CEP_LENGHT: number
  MAXIMUM_CEP_LENGHT: number

  constructor() {
    this.MININUM_NAME_LENGHT = 3
    this.MAXIMUM_NAME_LENGHT = 55

    this.MINIMUM_CPF_LENGHT = 11
    this.MAXIMUM_CPF_LENGHT = 14

    this.MINIMUM_CEP_LENGHT = 8
    this.MAXIMUM_CEP_LENGHT = 9
  }

  createCustomer(payload: CustomersPayload) {
    const createCustomerValidator = Joi.object({
      name: Joi.string()
        .min(this.MININUM_NAME_LENGHT)
        .max(this.MAXIMUM_NAME_LENGHT)
        .trim()
        .required(),
    
      email: Joi.string()
        .email()
        .required(),
    
      birthday: Joi.string()
        .regex(/\d{2}\/\d{2}\/\d{4}/)
        .required(),
    
      cpf: Joi.string()
        .min(this.MINIMUM_CPF_LENGHT)
        .max(this.MAXIMUM_CPF_LENGHT)
        .required(),
    
      password: Joi.string()
        .regex(/^([a-zA-Z0-9@*#]{6,15})$/)
        .required(),
    
      cep: Joi.string()
        .min(this.MINIMUM_CEP_LENGHT)
        .max(this.MAXIMUM_CEP_LENGHT)
        .required(),
    
      number: Joi.number()
        .required()
    })

    const { error, value } = createCustomerValidator.validate(payload, {
      abortEarly: false
    })

    if (error) {
      throw error
    } 

  }
  

}


