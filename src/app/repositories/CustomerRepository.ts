import customerSchema from "../db/schemas/customerSchema";
import CustomersPayload from "../interfaces/customersPayload";
import RequestQuery from "../interfaces/RequestQuery"


class CustomerRepository {

  async create(payload: CustomersPayload) {
    return await customerSchema.create(payload)
  }

  async list(payload: RequestQuery){
    return await customerSchema.find({})
  }

  async getById(id: string) {
    return await customerSchema.findById({ _id: id })
  }

  async update(id: string, payload: CustomersPayload) {
    return await customerSchema.findByIdAndUpdate({ _id: id}, { payload }, { new: true, runValidators: true })
  }

  async delete(id: string) {
    return await customerSchema.findByIdAndDelete({ _id: id })
  }

}

export = new CustomerRepository()
