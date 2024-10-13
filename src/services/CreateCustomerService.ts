import prismaClient from "../prisma";
import { CreateCustomerProps } from "../types/index";
class CreateCustomerService {
  async execute({
    name,
    email,
    image,
    linkedin,
    position,
  }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Necessário preencher os campos");
    }
    const customer = prismaClient.customer.create({
      data: {
        name,
        email,
        image,
        linkedin,
        position,
      },
    });
    return customer;
  }
}

export { CreateCustomerService };
