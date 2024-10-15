export interface CreateCustomerProps {
  name: string;
  image: string;
  position: string;
  linkedin: string;
}
export interface DeleteCustomerProps {
  id: string;
}
export interface EditCustomerProps extends CreateCustomerProps {
  id: string;
}
