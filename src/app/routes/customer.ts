import { Router } from "express";
import CustomerController from "../controllers/CustomerController";

const router = Router()

router.post('/customer', CustomerController.createCustomer) 

router.get('/customers', CustomerController.getAllCustomers) 

router.get('/customer/:id', CustomerController.getCustomerById) 

router.put('/customer/:id', CustomerController.updateCustomer) 

router.delete('/customer/:id', CustomerController.deleteCustomer) 

export = router