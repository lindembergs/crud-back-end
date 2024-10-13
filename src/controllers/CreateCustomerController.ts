import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";
import { CreateCustomerProps } from "../types";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, image, linkedin, position } =
      request.body as CreateCustomerProps;
    //inicializo o serviço //
    const customerService = new CreateCustomerService();

    // chamo o serviço//
    const customer = await customerService.execute({
      name,
      email,
      image,
      linkedin,
      position,
    });
    // devolve para a api //
    reply.send(customer);
  }
}

export { CreateCustomerController };
