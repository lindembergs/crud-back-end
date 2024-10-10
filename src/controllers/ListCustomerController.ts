import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomers = new ListCustomerService();
    const customers = await listCustomers.execute();
    reply.send(customers);
  }
}

export { ListCustomerController };
