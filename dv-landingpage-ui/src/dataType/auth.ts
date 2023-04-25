export interface Auth {
  id: number, 
  name: string,
  email: string,
  token: string, 
  create_date: string,
  update_date: string, 
  address: string,
  phone_no: string, 
}

export interface UserInfoReponse {
  id: number, 
  name: string, 
  email: string, 
  create_date: string, 
  update_date: string,
  address: string,
  phone_no: string, 
}