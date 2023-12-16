import CustomerRepository from "../repositories/CustomerRepository"
import CustomersPayload from "../interfaces/customersPayload"
import RequestParams from "../interfaces/RequestParams"

import RequestQuery from "../interfaces/RequestQuery"

class CustomerServices {

  async create(payload: CustomersPayload) {
    const result = CustomerRepository.create(payload)
    return result
  }

  async list(payload: RequestQuery) {
    const result = CustomerRepository.list(payload)
    return result
  }

  async getById(params: RequestParams) {
    const result = CustomerRepository.getById(params.id!)
    return result
  }

  async update(params: RequestParams, payload: CustomersPayload) {
    const result = CustomerRepository.update(params.id!, payload)
    return result
  }

  async delete(params: RequestParams) {
    const result = CustomerRepository.delete(params.id!)
    return result
  }

}

export = new CustomerServices()