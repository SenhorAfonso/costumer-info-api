import Joi from "joi";
import CustomersPayload from "../interfaces/CustomersPayload";
import { NextFunction, Request } from "express";


const MININUM_NAME_LENGHT = 3
const MAXIMUM_NAME_LENGHT = 55 

const MINIMUM_CPF_LENGHT = 11
const MAXIMUM_CPF_LENGHT = 14
 
const MINIMUM_CEP_LENGHT = 8
const MAXIMUM_CEP_LENGHT = 9

class CustomerValidator {


  constructor() {
  }

  createCustomer(req: Request, res: Response, next: NextFunction) {
    const createCustomerValidator = Joi.object({
      name: Joi.string()
        .min(MININUM_NAME_LENGHT)
        .max(MAXIMUM_NAME_LENGHT)
        .trim()
        .required(),
    
      email: Joi.string()
        .email()
        .required(),
    
      birthday: Joi.string()
        .regex(/\d{2}\/\d{2}\/\d{4}/)
        .required(),
    
      cpf: Joi.string()
        .min(MINIMUM_CPF_LENGHT)
        .max(MAXIMUM_CPF_LENGHT)
        .required(),
    
      password: Joi.string()
        .regex(/^([a-zA-Z0-9@*#]{6,15})$/)
        .required(),
    
      cep: Joi.string()
        .min(MINIMUM_CEP_LENGHT)
        .max(MAXIMUM_CEP_LENGHT)
        .required(),
    
      number: Joi.number()
        .required()
    })

    const { error } = createCustomerValidator.validate(req.body, {
      abortEarly: false
    })


    if (error) {
      next(error)
    } 

    next()

  }
  
}

export default new CustomerValidator()