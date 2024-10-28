import fastify from "fastify";
import { routes } from "./routes/routes";
import fastifyCors from "@fastify/cors";

const app = fastify({ logger: true });
// meddleware
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  try {
    await app.register(routes);
    await app.register(fastifyCors);
    await app.listen({ port: 3333 });
    console.log("servidor está rodando");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
