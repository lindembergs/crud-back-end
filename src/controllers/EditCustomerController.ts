import { FastifyReply, FastifyRequest } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";

class EditCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.body as { name: string };
    const { id } = request.params as { id: string };
    const customerService = new EditCustomerService();
    await customerService.execute({ id, name });
    reply.status(200).send();
  }
}
export { EditCustomerController };
