export interface CreateCustomerProps {
  name: string;
  email: string;
  image: string;
  position: string;
  linkedin: string;
}
export interface DeleteCustomerProps {
  id: string;
}
export interface EditCustomerProps {
  id: string;
  name: string;
  email: string;
}
