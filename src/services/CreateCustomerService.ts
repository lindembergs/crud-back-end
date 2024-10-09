interface CreateCustomerProps {
  name: string;
  email: string;
}
class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Necessário preencher os campos");
    }
    return { ok: true };
  }
}

export { CreateCustomerService };
