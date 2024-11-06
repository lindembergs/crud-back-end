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
        // caso eu não passe a validação ?? e o valor não for passado no momento da edição, o atributo ficará vazio e será excluído o valor anterior.
        name: name ?? findCustomer.name,
        image: image ?? findCustomer.image,
        linkedin: linkedin ?? findCustomer.linkedin,
        position: position ?? findCustomer.position,
      },
    });
    return updatedCustomer;
  }
}

export { EditCustomerService };
