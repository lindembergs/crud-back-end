import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    //inicializo o serviço //
    const customerService = new CreateCustomerService();

    // chamo o serviço//
    const customer = customerService.execute();
    // devolve para a api //
    reply.send(customer);
  }
}

export { CreateCustomerController };
