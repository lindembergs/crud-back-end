import prismaClient from "../prisma";
import { CreateCustomerProps } from "../types/index";
class CreateCustomerService {
  async execute({ name, image, linkedin, position }: CreateCustomerProps) {
    if (!name) {
      throw new Error("Necessário preencher os campos");
    }
    const customer = prismaClient.customer.create({
      data: {
        name,
        image,
        linkedin,
        position,
      },
    });
    return customer;
  }
}

export { CreateCustomerService };
