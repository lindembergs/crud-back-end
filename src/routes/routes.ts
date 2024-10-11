import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomerController } from "../controllers/ListCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";
import { EditCustomerController } from "../controllers/EditCustomerController";

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
  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    }
  );
  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
  fastify.put("/customer/:id", async (request, reply) => {
    return new EditCustomerController().handle(request, reply);
  });
}
// Ivo começa o desenvolvimento pelo serviço //
// rotas -> controllers -> services ->  db //
// CRUD -> CREATE(post) / READ(get) / UPDATE(put) DELETE(delete)
