import prismaClient from "../prisma";
import { EditCustomerProps } from "../types";

class EditCustomerService {
  async execute({ id, name, email }: EditCustomerProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });
    if (!findCustomer) {
      throw new Error("Usuário não encontrado");
    }
    const updatedCustomer = await prismaClient.customer.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        name: name,
        email: email,
      },
    });
    return updatedCustomer;
  }
}

export { EditCustomerService };
