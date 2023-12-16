export default interface RequestQuery {
  name?: string;
  email?: string;
  cpf?: string;
  sort?: 'asc' | 'desc';
  page?: string;
  limit?: string;
  skip?: string;
}