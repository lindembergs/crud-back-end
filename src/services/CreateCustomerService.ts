import prismaClient from "../prisma";
import { CreateCustomerProps } from "../types/index";
class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Necessário preencher os campos");
    }
    const customer = prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });
    return customer;
  }
}

export { CreateCustomerService };
