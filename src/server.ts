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

    const PORT = process.env.PORT || 3333; // Usar a porta definida pela Render
    await app.listen({ port: Number(PORT), host: "0.0.0.0" }); // Permitir acesso externo

    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
