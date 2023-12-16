class CustomerServices {

  async create(payload) {
    const result = 'Create new customer'
    return result
  }

  async list(payload) {
    const result = 'Get all customers'
    return result
  }

  async getById(payload) {
    const result = 'Getting customer by id'
    return result
  }

  async update(payload, reqBody) {
    const result = 'Updating a customer by id'
    return result
  }

  async delete(payload) {
    const result = 'Deleting customer by id'
    return result
  }

}

export = new CustomerServices()