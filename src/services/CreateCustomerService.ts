interface CreateCustomerProps {
  name: string;
  email: string;
}
class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    console.log("a rota está funcionando 🐱‍🏍");
    return { ok: true };
  }
}

export { CreateCustomerService };
