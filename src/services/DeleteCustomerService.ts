import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}
class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("O usuário não existe");
    }
    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });
  }
}

export { DeleteCustomerService };
