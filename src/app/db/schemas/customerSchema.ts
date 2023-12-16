import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be provide']
  },
  cpf: {
    type: String,
    required: [true, 'CPF must be provide']
  },
  birthday: {
    type: String,
    required: [true, 'birthday date must be provide']
  },
  email: {
    type: String,
    required: [true, 'Email must be provide']
  },
  password: {
    type: String,
    required: [true, 'Password must be provide'],
    minLength: [6, 'Password must be six or more characters']
  },
  cep: {
    type: String,
    required: [true, 'CEP must be provide']
  },
  uf: {
    type: String,
    required: [true, 'UF must be provide']
  },
  city: {
    type: String,
    required: [true, 'City must be provide']
  },
  address: {
    type: String,
    required: [true, 'Address must be provide']
  },
  number: {
    type: Number,
    required: [true, 'Number must be provide']
  },
  complement: {
    type: String
  },
  neighborhood: {
    type: String,
    required: [true, 'Neighboorhood must be provide']
  },

})

export default mongoose.model('CustomersModel', CustomerSchema)