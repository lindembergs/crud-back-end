import { FastifyReply, FastifyRequest } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";

class EditCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    const { id } = request.query as { id: string };
    const customerService = new EditCustomerService();
    await customerService.execute({ id, name, email });
    reply.status(200).send();
  }
}
export { EditCustomerController };
