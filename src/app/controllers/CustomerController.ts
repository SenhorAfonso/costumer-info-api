import type { Request, Response } from "express"

class CustomerController {

  constructor() {}

  async createCustomer(req: Request, res: Response) {
    return res.send('Create new customer')
  }

  async getAllCustomers(req: Request, res: Response) {
    return res.send('Get all customers')
  }
  async getCustomerById(req: Request, res: Response) {
    return res.send('Getting customer by id')
  }

  async updateCustomer(req: Request, res: Response) {
    return res.send('Updating a customer by id')
  }

  async deleteCustomer(req: Request, res: Response) {
    return res.send('Delete a customer')
  }

}

export = new CustomerController()