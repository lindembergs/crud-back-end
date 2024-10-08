import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerController } from "../controllers/CreateCustomerController";

export async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { message: "Deu certo" };
    }
  );
  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );
}
// Ivo começa o desenvolvimento pelo serviço //
// rotas -> controllers -> services ->  db //
