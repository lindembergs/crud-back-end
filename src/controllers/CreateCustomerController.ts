import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    //inicializo o serviço //
    const customerService = new CreateCustomerService();

    // chamo o serviço//
    const customer = await customerService.execute({ name, email });
    // devolve para a api //
    reply.send(customer);
  }
}

export { CreateCustomerController };
