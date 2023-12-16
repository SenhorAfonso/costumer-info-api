import CustomerRepository from "../repositories/CustomerRepository"
import CustomersPayload from "../interfaces/customersPayload"

class CustomerServices {

  async create(payload: CustomersPayload) {
    const result = CustomerRepository.create(payload)
    return result
  }

  async list(payload: CustomersPayload) {
    const result = CustomerRepository.list(payload)
    return result
  }

  async getById(id: string) {
    const result = CustomerRepository.getById(id)
    return result
  }

  async update(id, payload: CustomersPayload) {
    const result = CustomerRepository.update(id, payload)
    return result
  }

  async delete(id: string) {
    const result = CustomerRepository.delete(id)
    return result
  }

}

export = new CustomerServices()