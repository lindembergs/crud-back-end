import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerServices } from "../services/CreateCustomerServices";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    //inicializo o serviço //
    const customerService = new CreateCustomerServices();

    // chamo o serviço//
    const customer = customerService.execute();
    // devolve para a api //
    reply.send(customer);
  }
}

export { CreateCustomerController };
