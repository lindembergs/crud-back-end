import prismaClient from "../prisma";
import { EditCustomerProps } from "../types";

class EditCustomerService {
  async execute({ id, name, image, linkedin, position }: EditCustomerProps) {
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
        name: name !== "" ? name : findCustomer.name,
        image: image !== "" ? image : findCustomer.image,
        linkedin: linkedin !== "" ? linkedin : findCustomer.linkedin,
        position: position !== "" ? position : findCustomer.position,
      },
    });
    return updatedCustomer;
  }
}

export { EditCustomerService };
