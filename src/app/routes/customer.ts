import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import CustomerValidator from "../middlewares/validations/customerBodyValidation";
import validationErrorHandler from "../middlewares/handling/validationErrorHandler";

const router = Router()

router.post('/customer', CustomerValidator.createCustomer, validationErrorHandler.createValidationErrorHandler, CustomerController.createCustomer) 

router.get('/customers', CustomerController.getAllCustomers) 

router.get('/customer/:id', CustomerController.getCustomerById) 

router.put('/customer/:id', CustomerController.updateCustomer) 

router.delete('/customer/:id', CustomerController.deleteCustomer) 

export = router