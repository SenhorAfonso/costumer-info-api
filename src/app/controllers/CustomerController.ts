import type { Request, Response } from "express"
import CustomerServices from "../services/CustomerServices"

class CustomerController {

  constructor() {}

  async createCustomer(req: Request, res: Response) {
    const result = await CustomerServices.create(req.body)
    return res.send(result)
  }

  async getAllCustomers(req: Request, res: Response) {
    const result = await CustomerServices.list(req.query)
    return res.send(result)
  }
  async getCustomerById(req: Request, res: Response) {
    const result = await CustomerServices.getById(req.params)
    return res.send(result)
  }

  async updateCustomer(req: Request, res: Response) {
    const result = await CustomerServices.update(req.params, req.body)
    return res.send(result)
  }

  async deleteCustomer(req: Request, res: Response) {
    const result = await CustomerServices.delete(req.params)
    return res.send(result)
  }

}

export = new CustomerController()