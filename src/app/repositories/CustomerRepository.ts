import customerSchema from "../db/schemas/customerSchema";

class CustomerRepository {

  async create(payload) {
    return await customerSchema.create(payload)
  }

  async list(payload){
    return await customerSchema.find({})
  }

  async getById(id) {
    return await customerSchema.findById({ _id: id })
  }

  async update(id, payload) {
    return await customerSchema.findByIdAndUpdate({ _id: id}, { payload }, { new: true, runValidators: true })
  }

  async delete(id) {
    return await customerSchema.findByIdAndDelete({ _id: id })
  }

}

export = new CustomerRepository()
