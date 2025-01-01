import { log } from "console";
import prismaClient from "../prisma";
import { CreateCustomerProps } from "../types/index";

class CreateCustomerService {
  async execute({ name, image, linkedin, position }: CreateCustomerProps) {
    if (!name || !image || !linkedin || !position) {
      throw new Error("Necessário preencher os campos");
    }

    try {
      const customer = await prismaClient.customer.create({
        data: {
          name,
          image,
          linkedin,
          position,
        },
      });
      return customer;
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
      throw new Error(
        "Erro ao criar o usuário. Por favor, tente novamente 2025."
      );
    }
  }
}

export { CreateCustomerService };
