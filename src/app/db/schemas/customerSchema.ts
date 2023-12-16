import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name must be provide']
  },
  cpf: {
    type: String,
    require: [true, 'CPF must be provide']
  },
  birthday: {
    type: String,
    require: [true, 'birthday date must be provide']
  },
  email: {
    type: String,
    require: [true, 'Email must be provide']
  },
  password: {
    type: String,
    require: [true, 'Password must be provide'],
    minLength: [6, 'Password must be six or more characters']
  },
  cep: {
    type: String,
    require: [true, 'CEP must be provide']
  },
  uf: {
    type: String,
    require: [true, 'UF must be provide']
  },
  city: {
    type: String,
    require: [true, 'City must be provide']
  },
  address: {
    type: String,
    require: [true, 'Address must be provide']
  },
  number: {
    type: Number,
    require: [true, 'Number must be provide']
  },
  complement: {
    type: String
  },
  neighborhood: {
    type: String,
    require: [true, 'Neighboorhood must be provide']
  },

})

export = mongoose.model('CustomersModel', CustomerSchema)