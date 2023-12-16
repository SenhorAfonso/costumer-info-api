import CustomerRepository from "../repositories/CustomerRepository"

class CustomerServices {

  async create(payload: CustomerInterface) {
    const result = CustomerRepository.create(payload)
    return result
  }

  async list(payload) {
    const result = CustomerRepository.list(payload)
    return result
  }

  async getById(id) {
    const result = CustomerRepository.getById(id)
    return result
  }

  async update(id, payload) {
    const result = CustomerRepository.update(id, payload)
    return result
  }

  async delete(id) {
    const result = CustomerRepository.delete(id)
    return result
  }

}

export = new CustomerServices()