import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { message: "Deu certo" };
    }
  ); // Ivo começa o desenvolvimento pelo serviço //
} // rotas -> controllers -> services ->  db //
