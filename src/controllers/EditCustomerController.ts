import { FastifyReply, FastifyRequest } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";
import { EditCustomerProps } from "../types";

class EditCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, image, linkedin, position } =
      request.body as EditCustomerProps;
    const { id } = request.params as { id: string };
    const customerService = new EditCustomerService();
    await customerService.execute({ id, name, image, linkedin, position });
    reply.status(200).send();
  }
}
export { EditCustomerController };
